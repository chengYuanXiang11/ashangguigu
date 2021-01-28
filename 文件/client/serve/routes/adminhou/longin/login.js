const express = require('express')
const router = express.Router()
const SECRET = 'tokqianmingjiaoyan'
const Login = require("../../../models/Login")

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

router.post('/login',async(req,res) =>{
    const user = await Login.findOne({
        username:req.body.username
    })

    if(!user){
        return res.status(421).send({
     message:'没有这个账户哦  请注册一个吧'
    })
    }
    //密码验证
    const isPassword = require('bcryptjs').compareSync(req.body.password,user.password)
       
    if(!isPassword){
            return res.status(422).send({
                message:'密码错误'
            })
        }
    //生产token
    const jwt = require('jsonwebtoken')
        //签名
        const token = jwt.sign({
            _id : String(Login._id)
        },SECRET)
    // const Login = String(Logins)
    res.send({
        Login,
        token,
        message:'登陆成功'
    })
    console.log('11111111')
})
module.exports = router