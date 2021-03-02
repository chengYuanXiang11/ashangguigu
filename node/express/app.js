const express = require('express');
//创建app服务对象
const app = express();

//连接数据库
require('./plugins/db')(app);


app.disable('X-Powered-By');

//配置路由

const router =require('./router/shou');
app.use(`/api/data`,router);

app.listen(3008,()=>{
    console.log('http://localhost:3008/')
})


