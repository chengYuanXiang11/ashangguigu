const express = require('express')
const router = express.Router()
const SECRET = 'tokqianmingjiaoyan'
const Ping = require("../moduls/Pinglun")
const Ding = require("../moduls/Dingdan")
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

router.post('/ding',async(req,res) =>{
	await Ping.create({
		zonghe:req.body.zonghe,
		zonghetxt:req.body.txt,
		kuoweitxt:req.body.kuoweitxt,
		peisongtxt:req.body.peisongtxt,
		baozhuanghetxt:req.body.baozhuanghetxt,
		pinglun:req.body.pinglun,
		tupian:req.body.tupian,
		shipin:req.body.shipin,
		uid:req.body.uid,
		name:req.body.name,
		did:req.body.did
	})
	const c = await Ping.findOne({"tupian":req.body.tupian})
	console.log(c._id)
	await Ding.findByIdAndUpdate(req.body.did,{
		 pid:c.id
	 })
})

router.post('/dingid',async(req,res) =>{
	const a = await Ping.find()
	res.send(a)
})
module.exports = router