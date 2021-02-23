const express = require('express')
const router = express.Router()
const SECRET = 'tokqianmingjiaoyan'
const Login = require("../../../models/Login")
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

router.post('/register',async(req,res) =>{
   
    const user = await Login.findOne({
        username:req.body.username
    })
    if(user){
        return res.status(421).send({
     message:'用户名已存在'
    })}
 const users = await Login.create({
        username:req.body.username,
        password:req.body.password,
    })
    res.send(users)
})


//token验证
router.post('/profile',auth,async(req,res) =>{
     res.send(req.user)
})

router.put("/test", async (req, res) => {
    const article = await Login.findByIdAndUpdate(req.body._id, req.body)
    // .select('+passsword')
   
    res.send(article)
})

module.exports = router