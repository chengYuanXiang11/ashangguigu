const express = require('express')
const router = express.Router()
const SECRET = 'tokqianmingjiaoyan'
const Site = require("../moduls/Site")
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
router.post('/site',async(req,res) =>{
	if(req.body.defaultd == true){
		await Site.updateMany({uid:req.body.uid},{defaultd:'false'})
	}
	await Site.create({
	       name:req.body.name,
	       region:req.body.region,
			address:req.body.address,
			phone:req.body.phone,
			label:req.body.label,
			defaultd:req.body.defaultd,
			uid:req.body.uid,
			gender:req.body.gender
	   })
	   res.send()
})
router.post('/address',async(req,res) =>{
	
		const address =await Site.find({uid:req.body.uid})
	
	
	   res.send(address)
})
router.post('/dizhi',async(req,res) =>{
	const addre =await Site.find(  { $and: [ {uid:req.body.uid}, {defaultd:'true'}] })
	   res.send(addre)
})
router.post('/d1',async(req,res) =>{
	const addre =await Site.find( )
	   res.send(addre)
})
router.post('/d1id',async(req,res) =>{
	const addre =await Site.find({_id:req.body.id} )
	   res.send(addre)
})
// router.delete('/d1i',async(req,res) =>{
	
// 	res.send()
// })
router.post("/del", async(req, res) => {
	console.log(req.body)
    
        await Site.deleteOne({_id:req.body.id})
        res.send()
})
router.post('/moren',async(req,res) =>{
	await Site.updateMany({uid:req.body.uid},{defaultd:'false'})
		// await Site.updateMany({id:req.body.id},{defaultd:'true'})
		await Site.updateMany({_id:req.body.id},{defaultd:'true'})
		const address =await Site.find( {_id:req.body.id})
	   res.send(address)
})
module.exports = router