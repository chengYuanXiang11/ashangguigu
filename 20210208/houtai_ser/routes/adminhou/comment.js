//通用接口
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router({
    mergeParams:true//合并url参数
})
const Reqly = require('../../models/Reply')
const Comment = require('../../models/Comment')
//创建评论
router.post('/addcomment',async(req,res)=>{
  await Comment.create(req.body)
  res.send()

})
router.post('/findcomment',async(req,res)=>{
    const md=await Comment.find()
  res.send(md)

})
router.delete("/del/:id", async(req, res) => {
  await Comment.findByIdAndDelete(req.params.id)
  await Reqly.deleteMany({cid:req.params.id})
  res.send()
})

//创建回复
module.exports = router
