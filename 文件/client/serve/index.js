//后端接口
const express = require('express')
//定义express实例
const app = express()
// const mongoose = require('mongoose')

// app.use(require('cors')())
// app.use(express.json())

require('./plugins/db/db')(app)//连接数据库

const router = require('./routes/adminhou/index')  //  引入路由
const login = require('./routes/adminhou/longin/login')  //  引入路由
//  使用路由 /index 是路由指向名称
app.use(`/api/data`,router)
app.use(`/api/denglu`,login)
//打印报错
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
  });


app.listen(3001,()=>{
    console.log('http://localhost:3001/')
})





