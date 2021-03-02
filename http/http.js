// -Create

// 模型对象.create(文档对象，回调函数)
// 模型对象.create(文档对象)
// -Read

// 模型对象.find(查询条件[,投影])不管有没有数据，都返回一个数组
// 模型对象.findOne(查询条件[,投影])找到了返回一个对象，没找到返回null
// -Update

// 模型对象.updateOne(查询条件,要更新的内容[,配置对象])
// 模型对象.updateMany(查询条件,要更新的内容[,配置对象])
// 备注：存在update方法，但是即将废弃，查询条件匹配到多个时，依然只修改一个，强烈建议用updateOne或updateMany
// -Delete

// 模型对象.deleteOne(查询条件)
// 模型对象.deleteMany(查询条件)
// 备注：没有delete方法，会报错！

// 备注： 以上所有方法，如果没有指定回调函数，则返回值是一个Promise对象



// ## GET请求与POST请求

// ### 前言
// > HTTP设定了八种发送请求方式（也称为八大“动作”）。这八种方法没有任何本质上的区别。只是让请求，更加有语义化而已。
// 八种方法分别为：OPTIONS、HEAD、GET、POST、PUT、DELETE、TRACE、CONNECT
// 这八种方法最终经过“岁月沉淀”后，最常用的是这两种：GET、POST

// ### GET
//     1. 含义：从指定的资源获取数据（一种“索取”的感觉）。
//     2. 什么时候使用GET请求较为合适？
//         (1)单纯获取数据的时。
//         (2)请求非敏感数据时。

// ### POST
//     1.含义：向指定的资源提交要被处理的数据（一种“交差”的感觉）。
//     2.什么时候使用POST请求较为合适？
//         (1)传送相对敏感数据时。
//         (2)请求的结果有持续性的副作用，例如：传递的数据要写入数据库时。
//         备注：使用了POST不代表的绝对的安全。
        
// ### 常见的GET请求：
//     1.浏览器地址栏输入网址时（即浏览器请求页面时，且无法手动更改）。
//     2.可以请求外部资源的html标签，例如：<img> <a> <link> <script>，且无法手动更改。
//     3.发送Ajax时若没有指定发送请求的方式，则使用GET方式，或者明确指出了使用GET请求。
//     4.form表单提交时，若没有指明方式，默认使用GET。
    
// ### 常见的POST请求：
//     1.发送Ajax时,明确指出了使用POST方式时。
//     2.form表单提交时明确指出使用POST方式
    
// ###二者的区别
// ![avatar](2.GET与POST对比.png)
    



// ###http协议是什么？

// * 是什么：超文本传输协议（属于应用层协议）
// * 特点：无状态，现在cookie解决了无状态的问题（早期网页开发时，用cookie解决，现在是cookie和session配合使用）
// * 作用：规定了服务器和客户端传递信息的规则（统称为报文，分为：请求报文、响应报文。）
// * 版本：
//     * http 1.0 （老版本） ----------  不支持长连接
//     * http 1.1 （主流版本）---------  优点：支持长连接，弊端：同时发送资源的数量过小。
//     * http 2.0 （最新版） ----------  同时发送资源的数量稍有提升。
// * 报文(请求报文、响应报文)的组成：
//     1.报文首行
//     2.报文头
//     3.空行（仅仅作为一个分割）
//     4.报文体


/*;q=0.8,application/signed-exchange;v=b3
    Referer: http://localhost:63347/0719_node/demo.html?_ijt=tphpp47dag8jevtqrnq44blv6p
    Accept-Encoding: gzip, deflate, br
    Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7
    Cookie: Webstorm-9af2238=09820128-3adb-43e4-8242-a6f65c9e523a
    空行
    空行

GET http://localhost:3008/api/data/shou HTTP/1.1
Host: localhost:3008
Connection: keep-alive
Cache-Control: max-age=0
sec-ch-ua: "Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"
sec-ch-ua-mobile: ?0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/
// *;q=0.8,application/signed-exchange;v=b3;q=0.9
// Sec-Fetch-Site: none
// Sec-Fetch-Mode: navigate
// Sec-Fetch-User: ?1
// Sec-Fetch-Dest: document
// Accept-Encoding: gzip, deflate, br
// Accept-Language: zh-CN,zh;q=0.9
// Cookie: SL_G_WPT_TO=zh; SL_GWPT_Show_Hide_tmp=undefined; SL_wptGlobTipTmp=undefined
// If-None-Match: W/"432c-kQX34+C/z/ffsaEh5CwuVQ6tJs0"












// ## 请求报文首行
//     GET http://localhost:3000/?name=kobe&password=123 HTTP/1.1
//     -请求方式 协议名://主机地址:端口号/？urlencoded编码形式的参数 协议名/版本
// ## 请求报文头
//     Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
//        -- 浏览器能够接收资源的类型及优先级，优先级不写默认是1,1的优先级是最高的。


//     Accept-Encoding: gzip, deflate, br
//        -- 浏览器告诉服务器，浏览器所能接受的压缩文件类型。

//     Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7
//        -- 浏览器告诉服务器，浏览器所能支持的语言种类，及权重。

//     Connection: keep-alive
//        --浏览器告诉服务器，浏览器支持长连接。

//     Host: localhost:3000
//        --发送请求的目标主机：主机名:端口号


//     Referer: http://localhost:63347/0719_node/demo.html?_ijt=tphpp47dag8jevtqrnq44blv6p
//        -- 本次请求是“站”在哪里发出去的。 1.防盗链。 2.广告计费

//     Pragma: no-cache
//        -- 不走缓存

//     Cache-Control: no-cache
//        -- 不走缓存(强缓存)

//     Upgrade-Insecure-Requests: 1
//        -- 浏览器告诉服务器可以使用 https或http1.1

//     DNT: 1
//        -- 浏览器告诉服务器：禁止跟踪。最终是否跟踪，还得看服务器是否配合。

//     User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36
//        -- 用户代理：之前该字段用于判断用户的浏览器品牌以及版本，但是现在不好用了。


//     Cookie: Webstorm-9af2238=09820128-3adb-43e4-8242-a6f65c9e523a
//        -- Webstorm给你种下的cookie
// ## 空行

// ## 请求报文体
//     GET请求没有报文体

// ## 请求报文首行
//      POST http://localhost:3000/ HTTP/1.1
// ## 请求报文头
//     Host: localhost:3000
//     Connection: keep-alive
//     【Content-Length: 22】
//         -- 返回数据的长度
//     Pragma: no-cache
//     Cache-Control: no-cache
//     【Origin: http://localhost:63347】
//         -- 精简版的Referer  1.防盗链。 2.广告计费
//     Upgrade-Insecure-Requests: 1
//     DNT: 1
//     【Content-Type: application/x-www-form-urlencoded】
//         --浏览器告诉服务器，发送数据的类型
//     User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36
//     Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
//     Referer: http://localhost:63347/0719_node/demo.html?_ijt=r08g7l67qsmghv05cf7mphidka
//         -- “站”在哪里发出去的请求(源站)  1.防盗链。 2.广告计费
//     Accept-Encoding: gzip, deflate, br
//     Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7
//     Cookie: Webstorm-9af2238=09820128-3adb-43e4-8242-a6f65c9e523a


// # 响应报文(给浏览器看的)
//     HTTP/1.1 200 OK
//     X-Powered-By: Express
//     Content-Type: text/html; charset=utf-8
//     Content-Length: 2
//     ETag: W/"2-eoX0dku9ba8cNUXvu/DyeabcC+s"
//     Date: Fri, 01 Nov 2019 08:24:19 GMT
//     Connection: keep-alive
//     空行
//     ok

// ## 报文首行
//      HTTP/1.1 200 OK
//        --协议名/协议版本 状态码 
// ## 报文头
//     X-Powered-By: Express 
//         --服务器所采用的框架（尽量不要让用户知道服务器具体采用的技术）
//     Content-Type: text/html; charset=utf-8
//         --告诉浏览器返回资源的类型及编码格式
//     Content-Length: 2
//         --返回数据的长度
//     ETag: W/"2-eoX0dku9ba8cNUXvu/DyeabcC+s"
//         --协商缓存必要字段
//     Date: Fri, 01 Nov 2019 08:24:19 GMT
//         --响应的日期+时间
//     Connection: keep-alive
//         --服务器告诉浏览器，下次请求时，或许会采用长连接。



// ###Http状态码（服务器给客户端的东西）

// ###作用：  
// * 告诉客户端，当前服务器处理请求的结果
    
// ###http状态码的分类
//  * 1xx : 服务器已经收到了本次请求，但是还需要进一步的处理才可以。
//  * 2xx : 服务器已经收到了本次请求，且已经分析、处理等........最终处理完毕！
//  * 3xx : 服务器已经接收到了请求，还需要其他的资源，或者重定向到其他位置，甚至交给其他服务器处理。
//  * 4xx ：一般指请求的参数或者地址有错误， 出现了服务器无法理解的请求（一般是前端的锅）。
//  * 5xx ：服务器内部错误（不是因为请求地址或者请求参数不当造成的），无法响应用户请求（一般是后端人员的锅）。
 
// ###常见的几个状态码
//  * 200 ：成功（最理想状态）
//  * 301 ：重定向，被请求的旧资源永久移除了（不可以访问了），将会跳转到一个新资源，搜索引擎在抓取新内容的同时也将旧的网址替换为重定向之后的网址；
//  * 302 ：重定向，被请求的旧资源还在（仍然可以访问），但会临时跳转到一个新资源，搜索引擎会抓取新的内容而保存旧的网址。
//  * 304 ：请求资源重定向到缓存中（命中了协商缓存）。
//  * 404 ：资源未找到，一般是客户端请求了不存在的资源。
//  * 500 ：服务器收到了请求，但是服务器内部产生了错误。
//  * 502 ：连接服务器失败（服务器在处理一个请求的时候，或许需要其他的服务器配合，但是联系不上其他的服务器了）。
 
/*
* 问题：从用户输入URl按下回车，一直到用户能看到界面，期间经历了什么？
*
* 一、DNS解析（优先走缓存）：
*     1.找浏览器DNS缓存解析域名
*     2.找本机DNS缓存：(备注：查看本机DNS缓存命令：ipconfig/displaydns > C:/dns.txt)
*     3.找路由器DNS缓存
*     4.找运营商DNS缓存（80%的DNS查找，到这一步就结束）
*     5.递归查询 (查询全球13台根DNS服务器)
*
* 二、进行TCP（协议）连接，三次握手（根据上一步请求回来的ip地址，去联系服务器）
*     第一次握手：由浏览器发给服务器，我想和你说话，你能“听见”嘛？
*     第二次握手：由服务器发给浏览器，我能听得见，你说吧！
*     第三次握手：由浏览器发给服务器，好，那我就开始说话。
*
* 三、发送请求（请求报文）
*
* 四、得到响应（响应报文）
*
* 五、浏览器开始解析html
*       --预解析：将所有外部的资源，发请求出去
*       --解析html，生成DOM树
*       --解析CSS，生成CSS树
*       --合并成一个render树
*       --js是否操作了DOM或样式
*           --有：进行重绘重排（不好，1.尽量避免；2.最小化重绘重排）
*           --没有：null
*       --最终展示界面
*
*  六、断开TCP连接，四次挥手（确保数据的完整性）
*       第一次挥手：由浏览器发给服务器，我的东西接受完了，你断开吧。
*       第二次挥手：--由服务器发给浏览器，我还有一些东西没接收完，你等一会，我接收好了我告诉你
*                  --由服务器发给浏览器，我的东西接收完了，但是你还得等一会，我要验证数据的完整性，验证完了我告诉你。
*       第三次挥手：由服务器发给浏览器，我接收完（验证完）了，你断开吧。
*       第四次挥手：由浏览器发给服务器，好的，那我断开了。
*
*
* 备注：为什么握手要三次，挥手要四次？
*       握手之前，还没有进行数据的传输，确保握手就可以了。
*       挥手之前，正在进行数据的传输，为了确保数据的完整性，必须多经历一次验证（继续接收）
* */


//request和response都有什么API？
/*
  1.request对象：
      request.query	获取查询字符串参数（query参数），拿到的是一个对象 
      request.params 获取get请求参数路由的参数，拿到的是一个对象
      request.body	获取post请求体参数，拿到的是一个对象（不可以直接用，要借助一个中间件）
      request.get(xxxx)	获取请求头中指定key对应的value。
  2.response对象：
      response.send()	给浏览器做出一个响应
      response.end()	给浏览器做出一个响应（不会自动追加响应头）
      response.download()	告诉浏览器下载一个文件，可以传递相对路径
      response.sendFile()	给浏览器发送一个文件 备注：必须传递绝对路径
      response.redirect()	重定向到一个新的地址（url）
      response.set(key,value)	自定义响应头内容
      response.get(key)	获取响应头指定key对应的value  很少使用
      response.status(code)	设置响应状态码
 */

//1.过滤掉非法请求、带有攻击性的请求
//2.在匹配路由之前批量处理request
//3.防盗链


/*
 中间件：
     概念：本质上就是一个函数，包含三个参数：request、response、next

 作用：
        1)	执行任何代码。
        2)	修改请求对象、响应对象。
        3)	终结请求-响应循环。(让一次请求得到响应)
        4)	调用堆栈中的下一个中间件或路由。
  分类：
        1)	应用(全局)级中间件（过滤非法的请求，例如防盗链）
              --第一种写法：app.use((request,response,next)=>{})
              --第二种写法：使用函数定义
        2)	第三方中间件，即：不是Node内置的，也不是express内置的（通过npm下载的中间件，例如body-parser）
              --app.use(bodyParser.urlencoded({extended:true}))
        3)	内置中间件（express内部封装好的中间件）
              --app.use(express.urlencoded({extended:true}))
              --app.use(express.static('public')) //暴露静态资源
        4)	路由器中间件 （Router）
              --后面讲
   备注：
        1.在express中，定义路由和中间件的时候，根据定义的顺序（代码的顺序），将定义的每一个中间件或路由，
        放在一个类似于数组的容器中，当请求过来的时候，依次从容器中取出中间件和路由，进行匹配，如果匹配
        成功，交由该路由或中间件处理，如果全局中间件写在了最开始的位置，那么他就是请求的“第一扇门”。
        2.对于服务器来说，一次请求，只有一个请求对象，和一个响应对象，其他任何的request和response都是对二者的引用。
 */
const express = require('express')
//引入body-parser，用于解析post参数
//const bodyParser = require('body-parser')
// 【第一种】使用应用级(全局)中间件------所有请求的第一扇门-------所有请求都要经过某些处理的时候用此种写法
/*app.use((request,response,next)=>{
  //response.send('我是中间件给你的响应')
  //response.test = 1 //修改请求对象
  //图片防盗链
  if(request.get('Referer')){
    let miniReferer = request.get('Referer').split('/')[2]
    if(miniReferer === 'localhost:63347'){
      next()
    }else{
      //发生了盗链
      response.sendFile(__dirname+'/public/err.png')
    }
  }else{
    next()
  }
  //next()
})*/

//【第二种】使用全局中间件的方式------更加灵活，不是第一扇门，可以在任何需要的地方使用。
function guardPic(request,response,next) {
  //防盗链
  if(request.get('Referer')){
    let miniReferer = request.get('Referer').split('/')[2]
    if(miniReferer === 'localhost:63347'){
      next()
    }else{
      //发生了盗链
      response.sendFile(__dirname+'/public/err.png')
    }
  }else{
    next()
  }
}

//使用第三方中间件bodyParser

//解析post请求请求体中所携带的urlencoded编码形式的参数为一个对象，随后挂载到request对象上
//app.use(bodyParser.urlencoded({extended: true}))

//解析post请求请求体中所携带的urlencoded编码形式的参数为一个对象，随后挂载到request对象上
app.use(express.urlencoded({extended: true}))

//使用内置中间件去暴露静态资源 ---- 一次性把你所指定的文件夹内的资源全部交出去。
app.use(express.static(__dirname+'/public'))

app.get('/',(request,response)=>{
    console.log(request.demo)
    response.send('ok')
})

app.get('/demo',(request,response)=>{
    console.log(request.demo)
    console.log(request.query)
    response.send('ok2')
})

app.get('/picture',guardPic,(request,response)=>{
  response.sendFile(__dirname+'/public/demo.jpg')
})

app.post('/test',(request,response)=>{
  console.log(request.body)
  response.send('ok')
})


app.listen(3000,function (err) {
  if(!err) console.log('ok')
  else console.log(err)
})