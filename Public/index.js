//setup requirements
var express = require('express');
var app = express();
var mongoose = require('mongoose');

//var data = [{id: '1', title: 'first blog', Content: "this is the first blog"}, {id: '2', title: 'second blog', Content: "this is the second blog"}]

//connect to the database
mongoose.connect("mongodb+srv://test:test@posts-5e38r.mongodb.net/post");

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var postSchema = new mongoose.Schema ({
   id: String,
   title: String,
   Content: String
});
var urlencodedParser = bodyParser.urlencoded({extended:false});

var Post = mongoose.model('Post', postSchema);

app.use(express.static('public'));
app.use(express.static('views/admin'));


app.set('view engine', 'ejs');

//initial loaded page 
app.get("/", function (req, res){
   Post.find({}, (err, posts) => {
      Post.find({}, function(err, data){
         if (err) throw err; 
         res.render('index', { posts: data});
      });
   });
});
//post
app.get('/post', function (req, res) {
   res.render('post');
});
app.post("/post", urlencodedParser, function(req, res) {
   //get data from the view and add it to mongodb
   var newPost = Post(req.body).save(function(err,data){
      if (err) throw err;
      res.json(data);
   });
 });

  app.delete('/post/:id', function(req, res){
    Post.find({id: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
      if (err) throw err; 
      res.json(data);
    });
   });

//login.ejs
app.get('/admin/login', function (req, res) {
   res.render('admin/login')
});
//add post.ejs
app.get('/admin/add_post', function (req, res) {
  res.render('admin/add_post')
});
//add user.ejs
app.get('/admin/add_user', function (req, res) {
  res.render('admin/add_user')
});
//list posts.ejs
app.get('/admin/list_posts', function (req, res) {
  res.render('admin/list_posts')
});
  
//list users.ejs
app.get('/admin/list_users', function (req, res) {
  res.render('admin/list_users')
});
//read post.ejs
app.get('/admin/read_post', function (req, res) {
  res.render('admin/read_post')
});
//update post.ejs
app.get('/admin/update_post', function (req, res) {
  res.render('admin/update_post')
});
//update users.ejs
app.get('/admin/update_user', function (req, res) {
  res.render('admin/update_user')
});

//server port 
 app.listen(7000, () => {
    console.log('Server listing on 7000');
});