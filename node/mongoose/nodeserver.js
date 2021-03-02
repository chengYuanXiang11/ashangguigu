// node原生服务器

//引入http模块
let http = require('http');

//用于解析key=value$ket=value
let qs =require('querystring');
// 创建服务器
let server = http.createServer(function(request,response){
    let params = request.url.split('?')[1];
    console.log(qs.parse(params));
    response.setHeader('content-type','text/html:charset=utf-8');
    response.end('<h1>我是服务器</h1>');
})

server.listen(3000,(err)=>{
    if(err)console.log(err);
    else console.log('ok');
});