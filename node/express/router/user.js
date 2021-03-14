const express = require('express')
const app = express()
const router = express.Router()
const SECRET = 'tokqianmingjiaoyan'
const User = require("../moduls/User")
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)


router.post('/create', async (req, res) => {
   const di= await User.create(req.body)
    res.send({di,msg:'添加成功'});
});

router.get('/finde', async (req, res) => {
    let article = null;
    if(req.query.type==1){
        console.log('1')
         article = await User.find({'type':req.query.type}).skip(0).limit(20);
        console.log()
    }else if(req.query.type==2){
        console.log('2')

         article = await User.find({'type':req.query.type}).skip(0).limit(20);

    }else{
        console.log('3')

         article = await User.find().skip(0).limit(20);
    }


    var a =(req.query.current-1)*req.query.size;
    var b =req.query.size;

    const toter = await User.find().count()
    res.send({
        total:toter,
        records:article
    })
});

//删除用户
router.put("/deleteList", async(req, res) => {
        await User.findByIdAndDelete(req.body.idList)
        res.send({msg:'已成功删除'})
})
router.put("/update", async(req, res) => {
    const article = await User.findByIdAndUpdate(req.body._id, req.body)
    res.send({article,msg:'修改完成'})
})
// // //token验证 返回信息
// router.post('/profile',auth,async(req,res) =>{
//      res.send(req.user)
// })
// //返回所有用户信息
// router.post('/finde',async(req,res)=>{
//     console.log(req.query)
//     var a =(req.query.current-1)*req.query.size;
//     var b =req.query.size;

//     const toter = await Login.find().count()
//     const article = await Login.find().skip(0).limit(20)
//     res.send({
//         total:toter,
//         records:article
//     })
// })

module.exports = router