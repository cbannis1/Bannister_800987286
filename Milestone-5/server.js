const express = require('express')
const mongoose = require('mongoose')
const Post = require('./models/post')
const postsRouter = require('./routes/posts')
const usersRouter = require('./routes/users')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const app = express()
<<<<<<< HEAD
//used to upload files 
upload = require("express-fileupload")
app.use(upload())

=======
app.use(bodyParser.json())
>>>>>>> milestone-6-rest
app.use(express.static('Assets'))

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req,res) =>{//async await resolved "posts.forEach is not a function" error in this line 
    const posts = await Post.find()
    res.render('index' , { posts: posts})
})

app.use('/',usersRouter)
app.use('/admin', postsRouter)

app.listen(4000)