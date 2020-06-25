const express = require('express')
const Post = require('./../models/post')
const router = express.Router()

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

router.post('/', async (req, res ) => {
        let post = new Post({
        title: req.body.title,
        content: req.body.content
        })
        try {
          post = await post.save()
          res.redirect(`/admin/${post.id}`)
        } catch (error) {
          res.render('admin/add_post', { post: post })
        }
    })

  
router.put('/:id',  async (req, res ) => {
    let post = new Post({
    title: req.body.title,
    content: req.body.content
    })
    try {
      post =  await post.save()
      res.redirect(`/admin/${post.id}`)
    } catch (error) {
      res.render('admin/update_post', { post: post })
    }
})

router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router