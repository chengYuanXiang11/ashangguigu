var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/cheng",function(err){
  if(err){
    throw err;
  }else{
    console.log("数据库已开启...");
  }
});


//定义骨架schema (该骨架是一种数据结构声明,不具备数据库操作能力)
var chengScheam = new mongoose.Schema({
    name : String,
    age : Number
});


//创建模型model(model模型是一种根据骨架创建出来的模型，具备数据库操作的能力,通常用于读取数据库)
var chengModel = mongoose.model('jihe',chengScheam,'jihe');




//创建实体Entity(Entity实体是根据模型创建出一个实例,具备数据库操作的能力,通常用于写数据)
var cheng = new chengModel();
cheng.name = "赵云";






/* GET home page.(首页路由) */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  chengModel.find({},function(err,data){
    res.send(data);
  });
});


//读取所有普用户路由

router.get('/cheng.html',function(req,res){
  chengModel.find({"name":"张"},function(err,data){
    res.send(data);
  })
});



module.exports = router;
