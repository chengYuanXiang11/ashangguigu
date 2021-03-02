// Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

const { time } = require("console");
const { setImmediate } = require("timers");
const { pathToFileURL } = require("url");
const { isDeepStrictEqual } = require("util");

//  优点
// 	异步非阻塞的I/O（I/O线程池）
// 	特别适用于I/O密集型应用
// 	事件循环机制
// 	单线程（成也单线程，败也单线程）
// 	跨平台

// node服务器最怕cpu密集型,客人点菜5分钟
// java成本高 专人专用

// 不足
// 回调函数嵌套太多、太深（俗称回调地狱)	
// 单线程，处理不好CPU 密集型任务



// 应用场景

// Web服务API，比如RESTful API（本身没有太多的逻辑，只需要请求API，组织数据进行返回即可）

// 服务器渲染页面，提升速度

// 后端的Web服务，例如跨域、服务器端的请求


// node中的函数
// 通过arguments.calle.toString()可以看到一个函数：
// function (exports, require, module, __filename, __dirname) {}
// 这个函数是所有模块都有的，node编译时往其中注入5个参数：
// exports  	暴露模块
// require		引入模块
// module		exports属性暴露模块
// __filename	当前文件的绝对路径
// __dirname	当前文件夹的绝对路径

console.log(__filename);
console.log(__dirname)
// 文件定位
// require()中的文件，如果没有后缀名，会以.js .json .node次序补充扩展名，依次尝试。

// 设计外层函数
// 1.支持模块化
// 2.隐藏服务器内部实现

// node 中禁止函数this只想global,而是指向了一个对象

// node 事件循环机制 6个阶段
/*
  第一个阶段：timers(定时器阶段--setTimeout,setInterval)
           1.开始计时
           2.执行定时器的回调

  第二个阶段：pending callbacks (系统阶段)

  第三个阶段：idle, prepare (准备阶段)

  第四个阶段：poll(轮询阶段，核心)
            ---如果回调队列里有待执行的回调函数
                从回调队列中取出回调函数，同步执行(一个一个执行)，直到回调队列为空了，或者达到系统最大限度。
            ---如果回调队列为空
                  ---如果有设置过setImmediate
                      进入下一个check阶段，目的：为了执行setImmediate所设置的回调。
                  ---如果未设置过setImmediate
                      在此阶段停留，等待回调函数被插入回调队列。
                      若定时器到点了，进入下一个check阶段，原因：为了走第五阶段，随后走第六阶段，随后第一阶段(最终目的)

  第五个阶段：check (专门用于执行setImmediate所设置的回调)

  第六个阶段：close callbacks (关闭回调阶段)
  
  process.nextTick() ---- 用于设置立即执行函数(“VIP”-----能在任意阶段优先执行)
*/


// setTimeout 和 setImmediate 看轮询速度先后执行 定时器可加入时间


// setTimeout(() => {
//     console.log('time');
// });

// setImmediate(()=>{
//     console.log('112454');
// })

/*

npm 安装分为两个阶段 
    第一阶段 先找到对应资源地址,把地址返回
    第二阶段 请求地址文件
    packagejson 把地址保存,省下了第一步  
      1.什么是包？
      我们电脑上的文件夹，包含了某些特定的文件，符合了某些特定的结构，就是一个包。

  2.一个标准的包，应该包含哪些内容？
      1)	package.json ------- 描述文件（包的 “说明书”，必须要有！！！）
      2)	bin -----------------可执行二进制文件
      3)	lib ---------------- 经过编译后的js代码
      4)	doc	---------------- 文档（说明文档、bug修复文档、版本变更记录文档）
      5)	test --------------- 一些测试报告

  3.如何让一个普通文件夹变成一个包？
        让这个文件夹拥有一个：package.json文件即可,且package.json里面的内容要合法。
        执行命令：npm init
        包名的要求：不能有中文、不能有大写字母、同时尽量不要以数字开头、不能与npm仓库上其他包同名。

  4.npm与node的关系？（npm：node package manager）
        安装node后自动安装npm（npm是node官方出的包管理器，专门用于管理包）

  5.npm的常用命令？
      一、【搜索】：
            1.npm search xxxxx
            2.通过网址搜索：www.npmjs.com

      二、【安装】：(安装之前必须保证文件夹内有package.json，且里面的内容格式合法)

            1.npm install xxxxx --save   或   npm i xxxx -S   或   npm i xxxx
                备注：
                (1).局部安装完的第三方包，放在当前目录中node_modules这个文件夹里
                (2).安装完毕会自动产生一个package-lock.json(npm版本在5以后才有)，里面缓存的是每个下载过的包的地址，目的是下次安装时速度快一些。
                (3).当安装完一个包，该包的名字会自动写入到package.json中的【dependencies(生产依赖)】里。npm5及之前版本要加上--save后缀才可以。

            2.npm install xxxxx --save-dev  或  npm i xxxxx -D  安装包并将该包写入到【devDependencies(开发依赖中)】
              备注：什么是生产依赖与开发依赖？

                    1.只在开发时(写代码时)时才用到的库，就是开发依赖 ----- 例如：语法检查、压缩代码、扩展css前缀的包。
                    2.在生产环境中(项目上线)不可缺少的，就是生产依赖 ------ 例如：jquery、bootStrap等等。
                    3.注意：某些包即属于开发依赖，又属于生产依赖 -------例如：jquery。

            3.npm i xxxx -g  全局安装xxxx包（一般来说，带有指令集的包要进行全局安装，例如：browserify、babel等）
              全局安装的包，其指令到处可用，如果该包不带有指令，就无需全局安装。
              查看全局安装的位置：npm root -g

            4.npm i xxx@yyy :安装xxx包的yyy版本

            5.npm i ：安装package.json中声明的所有包

      三、【移除】：
            npm remove xxxxx  在node_module中删除xxxx包，同时会删除该包在package.json中的声明

      四、【其他命令】：
            1.npm audit fix :检测项目依赖中的一些问题，并且尝试着修复。

            2.npm view xxxxx versions :查看远程npm仓库中xxxx包的所有版本信息

            3.npm view xxxxx version :查看npm仓库中xxxx包的最新版本

            4.npm ls xxxx :查看我们所安装的xxxx包的版本

       五、【关于版本号的说明】：
            "^3.x.x" ：锁定大版本，以后安装包的时候，保证包是3.x.x版本，x默认取最新的。
            "~3.1.x" ：锁定小版本，以后安装包的时候，保证包是3.1.x版本，x默认取最新的。
            "3.1.1" ：锁定完整版本，以后安装包的时候，保证包必须是3.1.1版本。
* */
/* //1.使用new关键字创建一个Buffer实例，即将废弃，因为：1.效率极低；2.存在一些性能问题
let buf = new Buffer()
console.log(buf)
//2.使用Buffer.alloc创建一个Buffer实例，效率比new关键字稍高
let buf2 = Buffer.alloc(10)
console.log(buf2)

//3.Buffer.allocUnsafe创建一个Buffer实例，效率最高的一种方式
/*
* 1.为什么通过Buffer.allocUnsafe创建出来的实例，里面不为空？
*
* 2.为什么存的是二进制，输出的却不是二进制？
*     存储的确实为二进制数据，但是，一旦输出为了便于观察，自动转成16进制。
* */
/* let buf3 = Buffer.allocUnsafe(10)
console.log(buf3)

//4.将一个字符串保存在Buffer中
let str = 'HELLO ATGUIGU'
let buf4 = Buffer.from(str)
console.log(buf4)
  */


//   fs模块 文件读写
//简单文件写入
/*
* 1.Node中的文件系统：
*     1.在NodeJs中有一个文件系统，所谓的文件系统，就是对计算机中的文件进行增删改查等操作。
*     2.在NodeJs中，给我们提供了一个模块，叫做fs模块(文件系统)，专门用于操作文件。
*     3.fs模块是Node的核心模块，使用的时候，无需下载，直接引入。
* 2.简单文件写入(异步)
*      fs.writeFile(file, data[, options], callback)
*           --file：要写入文件的路径+文件名
*           --data：要写入的数据
*           --options：配置对象（可选）
*                --encoding：编码，默认值：utf-8(万国码)
*                --mode：文件权限的设置，默认值是0o666
*                     --0o111:文件的可执行权限(几乎不用，linux有自己的一套文件权限控制)
*                     --0o222:文件的可写入权限
*                     --0o444:文件的可读取权限
*                --flag：
*                     --w:写入数据
*                     --a:追加数据
*           --callback:回调函数
*                --err错误对象
*/

//备注：简单文件写入是一次性将所有要写入的内容加载到内存中，随后进行写入，适用于写入较小的文件。

let fs =require('fs');

// fs.writeFile(__dirname+'/m1.txt','写入文件',{
//     encoding:'utf-8',
//     flag:'a'
// },function(err){
//     if(err)console.log(err)
//     else console.log('写入成功');
// })

/*
* 流式文件写入：
*   fs.createWriteStream(path[, options])
*     --path：写入文件的路径+文件名字
*     --options：配置对象（可选）
*         --flags：
*           --w:写入数据
*           --a:追加数据
*         --encoding ：编码（默认值是utf-8）
*         --fd:文件唯一标识(linux中用)
*         --mode:文件权限控制
*             --0o111:文件的可执行权限(几乎不用，linux有自己的一套文件权限控制)
*             --0o222:文件的可写入权限
*             -0o444:文件的可读取权限
*         --autoClose:自动关闭文件，默认值是true
*             --true
*             --false
*         --start : 写入文件的起始位置，给数字
* */

let ws = fs.createWriteStream(__dirname+'/liu1.txt',{
    encoding:'utf-8',
    flags:'a',
    start:15
  
})

//只要用到了流，就要对流进行监听
ws.on('open',function () {
    console.log('可写流打开了')
  })
  
  ws.on('close',function () {
    console.log('可写流关闭了')
  })
  
  ws.write('今天天气真晴朗\n')
  ws.write('虽然有点热\n')
  ws.write('但是要放学了，我很开心')
  //ws.close()//对于node的8版本来说，不可以用close关闭流，有问题，会导致数据丢失
  ws.end()//当流中没有数据需要写入的时候，再关闭可写流
  
  
  
  