//通用接口
const express = require('express')
const router = express.Router({
    mergeParams:true//合并url参数
})

const Category = require('../../models/Category')
const Itemize= require('../../models/Itemize')
const Login = require('../../models/Login')

//添加

router.post('/add',async(req,res)=>{

  const f = await Itemize.findOne({
    "category":req.body.category
  })
 
  if(!f){
     const cd =await Itemize.create({"category":req.body.category})
    // console.log('dd')
  }
    //创建商品
   const model= await  Category.create(req.body)

    //根据商品查找分类id
   const m = await Itemize.findOne({
    "category":req.body.category
   })
   //根据商品查找用户id
   const u = await Login.findOne({
    "username":req.body.username
   })

   const c = await Category.findByIdAndUpdate(model.id,{
    "fid":m.id,
    "uid":u.id
   })
  

res.send()
})
// 查询所有分类
router.post('/d1',async(req,res)=>{
  const m = await Itemize.find()

 res.send(m)
})
//查询所有商品数据
router.post('/df/',async(req,res)=>{


  const a = req.body.username
 
    const m = await Category.aggregate([
        {
            $lookup: {
              from: "Itemize",
              localField: "_id",
              foreignField: "fid",
              as: "cate"
            }
          },
          {
            $lookup: {
              from: "Login",
              localField: "_id",
              foreignField: "uid",
              as: "user"
            }
          },
          {
            $match: {
                username:req.body.username
            }
        },{
          $sort:{
            category:1
          }
        }
      //   {
      //     $project://指定查询字段的关键词
      //     {
      //         _id: 0,//由于会默认展示_id，在这里设置为０，不展示
      //         name: 1,//展示一个字段名称为name的字段
      //         "institutionsData._id": 1,//同上
      //     }
      // }
       ],function(err,docs){
      
        // console.log(docs)
     
       
      })

   res.send(m)
})
//查询所有
router.post('/dfinde',async(req,res)=>{
    // const Model = require(`../../models/${req.params.resource}`)
   const m = await Itemize.find()

   const mode=await Category.findById(m.id)
 
   res.send(mode)
})
//根据id修改商品信息
router.put("/test",async (req, res) => {
    const article = await Category.findByIdAndUpdate(req.body._id, req.body)
    // .select('+passsword')
    
   
    res.send(article)
})
//根据id删除商品信息
router.delete("/del/:id", async(req, res) => {
    await Category.findByIdAndDelete(req.params.id)
    res.send()
})

//查询各个角色分类下的数据
router.post("/filterHandler",async(req,res)=>{
  
  if(req.body.category.label){
    await Category.find({$and:[{'category': req.body.category.label},{'username':req.body.username}]},null,function (err, comment) {
 
      res.send(comment)
  })
  }else{

    
      await Category.find({$and:[{'category': req.body.category.category},{'username':req.body.username}]},null,function (err, comment) {
        res.send(comment)
    })
  }

})
//获取所有数据
// router.post('/resa',async(req,res)=>{
//     const Model = require(`../../models/${req.params.resource}`)
//     const model= await Model.find()
//     res.send(model)
//  })
 //分页获取数据
router.post('/fen', async(req, res) => {
   let currentPage = parseInt(req.body.params.currentPage) // 转换前端传入当前页码
   let pagesize = parseInt(req.body.params.pagesize) // 转换前端传入的每页大小
   let dis = parseInt(req.body.params.dis)//跳过多少条
   let dia = pagesize *currentPage

   const ad=(req.body.params.data).slice(dis,dia)
 
   res.send(ad)
 })
 //搜索接口
 router.post('/sou', async(req, res) => {
  
  const keyword = req.body.keyword // 获取查询的字段
const reg = new RegExp(keyword, 'i') //不区分大小写

  //  const ac=await Category.find({name:{$regex:reg}})
  const ac=await Category.find({$and:[{name:{$in:reg}},{'username':req.body.username}]},null,function (clubErr, clubDoc) {
    res.send(clubDoc)
   
  })
  
})

module.exports = router
