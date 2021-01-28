module.exports = app =>{
    const mongoose = require('mongoose')
mongoose.connect('mongodb://94club:94club2020151@localhost:27017/test?authSource=admin',{
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