module.exports = app =>{
    const mongoose = require('mongoose')
mongoose.connect('mongodb://root:chengYuanXiangqqcom151@118.89.177.170:27017/meituan?authSource=admin',{
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology: true
},function(error){
    // 检查错误，初始化连接。回调没有第二个参数。

    if(error){
        console.log('cccccccccc')
  }else{
    console.log('okokok')
  }
})
}