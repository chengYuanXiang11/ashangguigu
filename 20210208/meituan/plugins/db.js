module.exports = app =>{
    const mongoose = require('mongoose')
mongoose.connect('mongodb://root:chengYuanXiangqqcom151@118.89.177.170:27017/meituan?authSource=admin',{
    useNewUrlParser:true, //使用一个新的URL解析器,用于解决一些安全性问题
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology: true//使用一个统一的新的拓扑结构
},function(error){
    // 检查错误，初始化连接。回调没有第二个参数。

    if(error){
        console.log('cccccccccc')
  }else{
    console.log('okokok')
  }
})
}