//通用接口
const express = require('express')
const router = express.Router({
    mergeParams:true//合并url参数
})

const Notice = require('../../models/Notice')

router.post("/notice",async (req, res) => {
 
    await Notice.create(req.body)
    res.send()
})
//查询富文本通知
router.post("/finde",async (req, res) => {
 
    const ad =await Notice.find()
    res.send(ad)
})
module.exports = router
