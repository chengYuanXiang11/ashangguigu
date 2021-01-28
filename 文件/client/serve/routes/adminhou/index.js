// module.exports = app =>{
//     const express = require('express')
//     const router = express.Router()

//     const Category = require('../../models/Category')
//     console.log(Category)
//     router.post('/categories',async(req,res)=>{
//        const model= await Category.create(req.body)
       
//        res.send(model)
//     })
//     router.get('/ca',async(req,res)=>{
//         const model= await Category.find()
//         res.send(model)
//      })
//      console.log('dsafdsf')
// }

const express = require('express')
const router = express.Router()

const Category = require('../../models/Category')

router.post('/categories',async(req,res)=>{
   const model= await Category.create(req.body)
   
   res.send(model)
})
router.post('/ca',async(req,res)=>{
    const model= await Category.find()
    res.send(model)
 })
router.get('/finnan', async(req, res) => {
   // let currentPage = parseInt(req.query.currentPage) // 转换前端传入当前页码
   let pagesize = parseInt(req.query.pagesize) // 转换前端传入的每页大小
   let dis = parseInt(req.query.dis)
   const article = await Category.find().skip(dis).limit(pagesize)
   res.send(article)
 })
module.exports = router
