//后端接口
const express = require('express')
//定义express实例
const app = express()

const assert = require('http-assert')

const mongoose = require('mongoose')

const jwt = require('jsonwebtoken')

//随机验证码
const  cryptoRandomString  =require('crypto-random-string');


const path = require("path");


const cookieParser = require('cookie-parser');


var session = require('express-session');


var MongoStore = require('connect-mongo')(session);



const SECRET = 'tokqianmingjiaoyan'

app.use(session({
	name: 'session-name', // 这里是cookie的name，默认是connect.sid
	secret: 'my_session_secret', // 建议使用 128 个字符的随机字符串
	rolling:true, 
	saveUninitialized: false,
		resave: false,
  store: new MongoStore({   
	    url: 'mongodb://localhost:27017/meituan',
}),
	cookie: { maxAge: 300000 , httpOnly: true}

}));
app.use(require('cors')())
app.use(express.json());
require('./plugins/db')(app)//连接数据库


// 全局设置响应头
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// })


// 引入 nodemailer
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
   host: "smtp.163.com",
	port: 465, // SMTP 端口
	secureConnection: true, // 使用了 SSL
	secure: true,
	auth: {
    user: 'cyx151125@163.com', //刚才注册的邮箱账号
    pass: 'BNZSQGRPQIOOLTIU'  //邮箱的授权码，不是注册时的密码
  }
});






//图片等静态文件需要静态托管 
// app.use('/',express.static(__dirname +'/public'))
app.use('/uploads',express.static(__dirname +'/uploads'))


const auth = async(req,res,next)=>{
  //前端传入    接收token

const raw = String(req.headers.authorization || '').split(' ').pop()
  try {
    const tokenDate = jwt.verify(raw,SECRET)
    // assert(tokenDate,401,'无效的jwt token')
   
req.user = await Login.findById(tokenDate._id)
// assert(req.user,401,'先登录')
    // 找到用户相关信息，并返回
    // 继续执行接口
    next()
}
catch(err) {
    res.status(401).send({message:'token不存在 请提供jwt token'})
}

}



const router = require('./router/shou.js')  //  引入路由
const login = require('./router/login.js')  //  引入路由
const site = require('./router/site.js')  //  引入路由
const ding = require('./router/ding.js')  //  引入路由
const hongbao = require('./router/hongbao.js')  //  引入路由

const pinglun = require('./router/pinglun.js')  //  引入路由


//  使用路由 /index 是路由指向名称
app.use(`/api/data`,router)
app.use(`/api/login`,login)
app.use(`/api/site`,site)
app.use(`/api/ding`,ding)
app.use(`/api/pinglun`,pinglun)
const multer = require('multer')
 const fullPath=path.resolve(__dirname+"/uploads");


 app.get('/',async(req,res)=>{
    res.send('index')
})


const storage =multer.diskStorage({
 

	
  //将上传的文件存储在指定的位置（不存在的话需要手动创建）
  destination: function (req, file, cb) {
    cb(null,fullPath);
},

  //将上传的文件做名称的更改
  filename: function (req, file, cb) {
      cb(null,  Date.now()+"-"+file.originalname )
  }
})
var upload = multer({ storage: storage })
//上传图片
app.post('/api/upload',upload.single('file'),async(req,res)=>{
  
    const file =req.file
    file.url = `http://localhost:3001/uploads/${file.filename}`
    res.send(file)
})


//发生验证码
app.post('/api/em',async(req,res)=>{
	const ada =cryptoRandomString({length: 6, type: 'numeric'});
		   req.session.email =  req.body.email;
		   req.session.verification = ada
	let mailOptions = {
	  from: '"m团验证码" <cyx151125@163.com>', // sender address
	  to: req.body.email, // list of receivers
	  subject: 'Hello', // Subject line
	  // 发送text或者html格式
	  // text: '610548', // plain text body
	  html: '<b>您的验证码为'+ada+'请在5分钟之内使用</b>' // html body
	};
	
	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
	  if (error) {
	    return console.log(error);
	  }
	  console.log('Message sent: %s', info.messageId);
	  // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
	});
	res.send(ada)
})
app.post('/api/uploads/:image',upload.single('file'),async(req,res)=>{
  const file =req.file
      file.url = `http://localhost:3001/uploads/${file.filename}`
        res.send(file)
  
})










app.listen(3008,()=>{
    console.log('http://localhost:3001/')
})





