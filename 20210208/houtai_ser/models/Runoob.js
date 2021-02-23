const mongoose = require('mongoose')
//销售信息
const schema = new mongoose.Schema({
   salevolume:{
       type:String
   },
   number:{
    type:String
   },
   data:{
       type:String
   }
})

module.exports = mongoose.model('Runoob',schema,'runoob')
