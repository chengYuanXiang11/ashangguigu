const express = require('express')
const router = express.Router()
const SECRET = 'tokqianmingjiaoyan'
const Login = require("../moduls/Shou")
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)


router.get('/shou',async(req,res) =>{
	console.log(res.params)
	// const dis2 = (req.query.page-1)*req.query.julit//跳过多少
    // const article = await Login.find().skip(dis2).limit(10)
	// const articelleng =await Login.find().countDocuments()//总数据量
	const dis2 = await Login.find({});
    // res.send({article,articelleng})
    res.send(dis2);

})
router.post('/sou',async(req,res) =>{
	if(req.body.sou ==''){
		return res.status(421).send()
	}else{
			const c =new RegExp(req.body.sou, 'i')
			const dis =await Login.find({'name':{$regex:c}})
			if(dis[0] == undefined){
				return res.status(421).send() 
			}else{
				return res.send(dis)
			}
	}
	
	// console.log(dis)
})

module.exports = router