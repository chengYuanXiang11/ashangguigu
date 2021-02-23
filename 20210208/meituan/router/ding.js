const express = require('express')
const router = express.Router()
const SECRET = 'tokqianmingjiaoyan'
const Ding = require("../moduls/Dingdan")
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

// router.post('/register',async(req,res) =>{
   
//     const user = await Login.findOne({
//         username:req.body.username
//     })
//     if(user){
//         return res.status(421).send({
//      message:'用户名已存在'
//     })}
//  const users = await Login.create({
//         username:req.body.username,
//         password:req.body.password,
//     })
//     res.send(users)
// })


//   }

// //token验证
// router.post('/profile',auth,async(req,res) =>{
//      res.send(req.user)
// })

// router.put("/test", async (req, res) => {
//     const article = await Login.findByIdAndUpdate(req.body._id, req.body)
//     // .select('+passsword')
   
//     res.send(article)
// })

router.post('/creat',async(req,res) =>{
 const users = await Ding.create({
        name:req.body.name,
		cname:req.body.cname,
        Zprice:req.body.Zprice,
		uid:req.body.uid,
		ok:req.body.ok,
		pid:req.body.pid,
		img:req.body.img,
		canju:req.body.canju,
		peisongfei:req.body.peisongfei,
		dabaofei:req.body.dabaofei,
		shangjian:req.body.shangjian,
		dizhi:req.body.dizhi,
    })
	res.send()
})
router.post('/findcreat',async(req,res) =>{
 const users = await Ding.find({
		uid:req.body.uid
    })
	res.send(users)
})
router.post('/findid',async(req,res) =>{
	console.log(req.body)
 const users = await Ding.find({
		_id:req.body.id
    })
	res.send(users)
})
module.exports = router