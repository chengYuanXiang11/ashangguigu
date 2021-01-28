module.exports = app =>{
    const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/houtai',{
    useNewUrlParser:true,
    useFindAndModify:true,
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