const express = require('express')
const Post = require('./../models/post')
const router = express.Router()
//for reading the file 
var fs = require('fs')

router.get('/add_post', (req, res) =>{
    res.render('admin/add_post', {post: new Post() })
})

router.get('/update_post/:id', async (req, res) =>{
    const post = await Post.findById(req.params.id)
    res.render('admin/update_post', {post: new Post() })
})

router.get('/:id', async (req, res) =>{
    const post = await Post.findById(req.params.id)
    res.render('admin/list_posts', { post: post})
})

//handles the post request from add_post
//async and await are used so the post can be added before it is reloaded 
router.post('/', async (req, res ) => {
        let post = new Post({
        title: req.body.title,
        content: req.body.content,
        file: req.body.files
        })
        //if there is a file being passed as a parameter
        if (req.body.files){
          var file = req.body.files.filename,//declared variable file to be used for the filename 
          filename=file.name//assign the filename to be the file with proprety name 
          //create variable content and assign it to this function which takes in the content and then assigns post.content to the content recieved 
          fs.readFile(filename, 'utf8', function (err, filecontent){//reads the file, txt
            req.body.content = filecontent
          }) 
        }
        //if there is no file proceed to add the post as normal 
          else {
            try {
              post = await post.save()//needs await here because of the async above 
              res.redirect(`/admin/${post.id}`)//this will send the user back to the admin route using the specified post.id 
            } catch (error) {
              res.render('admin/add_post')//if this doesnt work it should return the user back to the updat_post page 
            }
          }
        
    })

//handles the put request for update_post  
//still getting unhandled promise rejections when trying to visit this page 
// router.put('/:id',  async (req, res ) => {//does not work without async, reloads the page before it is able to update the post 
//     let post = new Post({
//     title: req.body.title,
//     content: req.body.content
//     })
//     try {
//       post =  await post.save()//needs await here because of the async above 
//       res.redirect(`/admin/${post.id}`)//this will send the user back to the admin route using the specified post.id 
//     } catch (error) {
//       res.render('admin/update_post')//if this doesnt work it should return the user back to the updat_post page 
//     }
// })


router.put('/posts/:id', function(req, res, next) {
  console.log(req.body);
  Post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
   if (err) return next(err);
   res.render('admin/update_post')
  });
 });
 

//handles the delete request 
//asynchronous because of unhandled promise rejections error solved by using async and then await
router.delete('/:id', async(req, res) => { //does not work without async, it seems to reload the page before deleting 
     await Post.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router