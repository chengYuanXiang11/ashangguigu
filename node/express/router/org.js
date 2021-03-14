const express = require('express')
const app = express()
const router = express.Router()
// const Login = require("../moduls/Login")
const Org = require("../moduls/org")
// const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
// var bcrypt = require('bcryptjs');
// mongoose.set('useFindAndModify', false)

function eachArr(value){
    console.log(value)
}
//返回所有机构
router.get('/listTree', async (req, res) => {
    const listTree = await Org.find();
    res.send(listTree);
})

//新增机构
var num=1;
router.post('/create', async (req, res) => {
    console.log(req.body)

    if (typeof (req.body.parentId) == 'number') {
        const childId = await Org.findOne({ id: req.body.parentId });
        req.body.org_id = childId._id;
        req.body.id =Number( req.body.parentId+String(num));
        num+=1
    } else{
        req.body.id = await Org.find({}).count();

    }
    console.log(req.body)
   const di= await Org.create(req.body)
    res.send(di);
});

//修改机构
router.put('/update', async (req, res) => {
    console.log(req.body)
    const article = await Org.findByIdAndUpdate(req.body._id, req.body);
    res.send(article)
})
router.get('/d123', async (req, res) => {
   
    //所有id
    const a = await Org.find({});
   
    res.send(a)
});
//根据Id查询机构信息
router.get("/get", async (req, res) => {
    const a = await Org.findOne({ id: req.query.id });
    res.send(a)
})

//根据id删除机构信息
router.delete("/delete", async (req, res) => {
    const a = await Org.findOne({ id: req.query.id });


    await Org.findByIdAndDelete(a._id);
    res.send()
})
// router.put("/test",async (req, res) => {
//     const article = await Login.findByIdAndUpdate(req.body._id, req.body)
//     const com = await Reply.find({"icon":req.body.icon})

//     res.send(article)
// })
// /
// router.post('/cookies',jiami,function(req, res, next) {
// 	if(req.session.isFirst || req.cookies.isFirst) {
//         res.send("欢迎再一次访问");
// 	} else {
//         req.session.isFirst = 1;
//         res.cookie('isFirst', 1, { maxAge: 60 * 1000, singed: true});
//         res.send("欢迎第一次访问。");
// 	}
// });
//登录
router.post('/auth', async (req, res) => {
    console.log(req.body)
    //     const user = await Login.findOne({
    //         username:req.body.username
    //     })
    //     if(!user){
    //             return res.status(421).send({
    //                 message:'没有这个账户哦  请注册一个吧'
    //                     })
    //             }else{
    //     //密码验证
    //         const isPassword = require('bcryptjs').compareSync(req.body.password,user.password)
    //         if(!isPassword){
    //                     return res.status(422).send({
    //                         message:'密码错误'
    //                     })
    //             }
    //     //生产token
    const jwt = require('jsonwebtoken')
    //签名
    const token = jwt.sign({
        // _id : String(user._id)
        _id: String(req.body.password)
    }, SECRET)
    // const Login = String(Logins)
    res.send({
        // user,
        token,
        // message:'登陆成功'
    })


    // }
})
// router.post('/login',async(req,res) =>{

//         const user = await Login.findOne({
//             username:req.body.username
//         })
//         if(!user){
// 				return res.status(421).send({
// 					message:'没有这个账户哦  请注册一个吧'
// 						})
//                 }else{
//         //密码验证
// 			const isPassword = require('bcryptjs').compareSync(req.body.password,user.password)
// 			if(!isPassword){
// 						return res.status(422).send({
// 							message:'密码错误'
// 						})
// 				}
//         //生产token
//         const jwt = require('jsonwebtoken')
//             //签名
//             const token = jwt.sign({
//                 _id : String(user._id)
//             },SECRET)
//         // const Login = String(Logins)
//         res.send({
//             user,
//             token,
//             message:'登陆成功'
//         })


// }
// })
// router.post('/forget',jiami,async(req,res) =>{
// 	const email = await Login.findOne({
// 	    email:req.body.email
// 	})
// 	if(!email){
// 	    return res.status(421).send({
// 		 message:'该邮箱不存在'
// 		})
// 		}
// 	const c =new RegExp(req.body.email, 'i') //不区分大小写
// 	const d =new RegExp(req.body.verification, 'i')
//    const a = await Forget.find({$and:[{"session":{$regex:c}},{'session':{$regex:d}}]})
//    if(a[0] !== undefined){
// 	   const article =  await Login.updateOne({"email":req.body.email}, {"password":req.body.password})
// 	  res.send({
// 		    message:'修改成功'
// 	  })
//    }else{
// 	  res.status(402).send({message:'验证码错误'})
//    }
// })
// //token验证 返回信息
// router.post('/profile',async(req,res) =>{
//      res.send(req.user)
// })
// //返回所有用户信息
// router.post('/finde',async(req,res)=>{
//     const article = await Login.find()
//     res.send(article)
// })
// //返回单个权限用户信息
// router.post('/user',async(req,res)=>{
//     const article = await Login.find({"user":req.body.label})
//     res.send(article)

// })

// //修改用户信息
// router.put("/test",async (req, res) => {
//     const article = await Login.findByIdAndUpdate(req.body._id, req.body)
//     const com = await Reply.find({"icon":req.body.icon})

//     res.send(article)
// })
// //修改评论和回复头像
// router.put("/tou",async (req, res) => {

//     await Reply.updateMany({"icon":req.body.aicon}, {"icon":req.body.bicon})
//     await Comment.updateMany({"icon":req.body.aicon}, {"icon":req.body.bicon})
//     res.send()
// })
// //玩一下ckooie
// router.post('/cookies', async(req,res)=>{



//         req.session.isFirst = req.body;


//          res.send(); 
// });

// //删除用户
// router.delete("/del/:id", async(req, res) => {


//         await Login.findByIdAndDelete(req.params.id)
//         res.send()
// })
// //管理者修改信息
// router.post("/modify",jiami,async(req,res)=>{

//     const article = await Login.findByIdAndUpdate(req.body._id, req.body)
//     // .select('+passsword')
//    await Category.updateMany({"uid":req.body._id}, {"username":req.body.username})

//     res.send(article)
// })
// //用户修改密码
// router.post("/ChangePassword",jiami,async(req,res)=>{

//     const article =  await Login.updateOne({"_id":req.body._id}, {"password":req.body.password})
//     // .select('+passsword')
//     res.send(article)

// })
// //修改登陆状态(禁止允许)
// router.post("/states",async(req,res)=>{
//     const article =  await Login.updateOne({"_id":req.body._id}, {"state":req.body.state})
//     res.send(article)

// })
// //搜索
// router.post('/sou', async(req, res) => {

//     const keyword = req.body.keyword // 获取查询的字段
//   const reg = new RegExp(keyword, 'i') //不区分大小写

//     //  const ac=await Category.find({name:{$regex:reg}})
//     const ac=await Login.find({username:{$regex:reg}},null,function (clubErr, clubDoc) {

//       res.send(clubDoc)

//     })

//   })

// //分页
// router.post('/fen', async(req, res) => {
//     let currentPage = parseInt(req.body.params.currentPage) // 转换前端传入当前页码
//     let pagesize = parseInt(req.body.params.pagesize) // 转换前端传入的每页大小
//     let dis = parseInt(req.body.params.dis)//跳过多少条
//     let dia = pagesize *currentPage

//     const ad=(req.body.params.data).slice(dis,dia)

//     res.send(ad)
//   })
//   //修改权限
//   router.post("/userstates",async(req,res)=>{
//     const article =  await Login.updateOne({"_id":req.body._id}, {"user":req.body.user})
// })
module.exports = router;