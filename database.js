var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://test:test@posts-5e38r.mongodb.net/post");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var data = [{id: '1', title: 'first blog', Content: "this is the first blog"}, {id: '2', title: 'second blog', Content: "this is the second blog"}]


var postSchema = new mongoose.Schema ({
   id: String,
   title: String,
   Content: String
});

var urlencodedParser = bodyParser.urlencoded({extended:false});

var Post = mongoose.model('Post', postSchema);
