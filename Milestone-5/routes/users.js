const express = require('express')
const User = require('./../models/user')
const mongoose = require('mongoose')
const user = require('./../models/user')
const { request } = require('express')
const router = express.Router()

//list all users
router.get("/users", (req,res) =>{
User.find({}).then(function(user){
    res.send(user)
})
})
//list individual users
router.get('/users/:id', async (req, res) => {
   await User.findById(req.params.id).then(function(user){
        res.send(user)
    })
})

//add users
router.post("/users", (req,res)=>{
    User.create(req.body).then(function(user){
        res.send(user);
    })
})
//update users
// router.put('/users/:id', async (req, res) => {
//     await User.findByIdAndUpdate(req.params.id)
//     res.redirect('/users')
// })

router.put('/users/:id', function(req, res, next) {
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
     if (err) return next(err);
     res.json(user);
    });
   });
   

//delete users
router.delete('/users/:id', async (req, res) => {
    res.send(`${req.params.id} was deleted`)
    await User.findByIdAndDelete(req.params.id)
    res.redirect('/users')
})

module.exports = router