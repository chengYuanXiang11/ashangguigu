//通用接口
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router({
    mergeParams:true//合并url参数
})

const Reply = require('../../models/Reply')
//创建评论
router.post('/addreply',async(req,res)=>{
  await Reply.create(req.body)
  res.send()
})
router.post('/findreply',async(req,res)=>{
  const m =  await Reply.find()
    res.send(m)
  })
  router.delete("/del/:id", async(req, res) => {
   
    await Reply.findByIdAndDelete(req.params.id)
    res.send()
  })
module.exports = router
