const express = require('express')
const router = express.Router()
const Hongbao = require("../moduls/Hongbao")
const Shou = require("../moduls/Shou")
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
// mongoose.set('useFindAndModify', false)

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
// router.post('/site',async(req,res) =>{
// 	if(req.body.defaultd == true){
// 		await Site.updateMany({uid:req.body.uid},{defaultd:'false'})
// 	}
// 	await Site.create({
// 	       name:req.body.name,
// 	       region:req.body.region,
// 			address:req.body.address,
// 			phone:req.body.phone,
// 			label:req.body.label,
// 			defaultd:req.body.defaultd,
// 			uid:req.body.uid,
// 			gender:req.body.gender
// 	   })
// 	   res.send()
// })
// router.post('/address',async(req,res) =>{
	
// 		const address =await Site.find({uid:req.body.uid})
	
	
// 	   res.send(address)
// })
// router.post('/dizhi',async(req,res) =>{
// 	const addre =await Site.find(  { $and: [ {uid:req.body.uid}, {defaultd:'true'}] })
// 	   res.send(addre)
// })
router.post('/d1',async(req,res) =>{
	const addr  = await Hongbao.create({
		money:req.body.money,
		type:req.body.type,
		starecon:req.body.starecon,
		endcon:req.body.endcon,
		stareDate:req.body.stareDate,
		endDate:req.body.endDate,
		uid:req.body.uid,
		sid:req.body.sid,
	})
	   res.send()
})
router.post('/find',async(req,res) =>{
	const addr  = await Hongbao.find()
	   res.send(addr)
})
router.post('/findname',async(req,res) =>{
	let b = req.body.name
	const addr  = await Hongbao.find({name:b})
	   res.send(addr)
})
router.post('/finduid',async(req,res) =>{
	let b = req.body.uid
	const addr  = await Hongbao.find({uid:b})
	   res.send(addr)
})
// router.post('/moren',async(req,res) =>{
// 	await Site.updateMany({uid:req.body.uid},{defaultd:'false'})
// 		// await Site.updateMany({id:req.body.id},{defaultd:'true'})
// 		await Site.updateMany({_id:req.body.id},{defaultd:'true'})
// 		const address =await Site.find( {_id:req.body.id})
// 	   res.send(address)
// })
module.exports = router