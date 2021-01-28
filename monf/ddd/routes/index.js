var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/news",function(err){
  if(err){
    throw err;
  }else{
    console.log("数据库已开启...");
  }
});


//定义骨架schema (该骨架是一种数据结构声明,不具备数据库操作能力)
var chengScheam = new mongoose.Schema({
    title : String,
    author : String,
    from : String,
    content : String,
    time: String,
    hits:Number
});


//创建模型model(model模型是一种根据骨架创建出来的模型，具备数据库操作的能力,通常用于读取数据库)
var chengModel = mongoose.model('jihe',chengScheam,'jihe');




//创建实体Entity(Entity实体是根据模型创建出一个实例,具备数据库操作的能力,通常用于写数据)



router.post('/save_add.html',function(req,res){
  var title =req.body.name;
  var author = req.body.pws;
  var from = req.body.zuozhe;
  var content = req.body.cont;
  console.log(title,from,author,content);

  var list = new chengModel();
list.title=title;
list.author=author;
list.from=from;
list.content=content;
list.time=new Date().toLocaleString();
list.hits=1;
list.save(function(){
  res.send('<script>alert("发布成了"); location.href="/list.html";</script>');
})
});



/* GET home page.(首页路由) */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  chengModel.find({},function(err,data){
    res.send(data);
  });
});




router.get('/list.html',function(req,res){
  chengModel.find().exec(function(err,data){
    res.render('new.ejs',{list:data});
  
  }); 
});



router.get('/del.html',function(req,res){
  var id = req.query.id;
  chengModel.findById(id).exec(function(err,data){
    data.remove(function(){
      res.send('<script>alert("删除了"); location.href="/list.html";</script>');
    });
  });
});




router.get('/edit.html',function(req,res){
  var id = req.query.id;
 
  chengModel.findById(id).exec(function(err,data){
   
    res.render('newsedit.ejs',{news:data});   
  });
});


router.post('/edit.html',function(req,res){
  var title = req.body.title;
  var author = req.body.autor;
  var from = req.body.from;
  var content = req.body.cont;
  var time = req.body.time;
  var id = req.body.id;

  chengModel.findById(id).exec(function(err,data){
    data.title=title[0];
    data.author=author;
    console.log(data.content);
    console.log(content);
    data.from=from;
   
    data.content=content; console.log(content);
    data.time=time;
 
    data.save(function(err){
      res.send('<script>alert("修改成了"); location.href="/list.html";</script>');
    });
  });
});




module.exports = router;
