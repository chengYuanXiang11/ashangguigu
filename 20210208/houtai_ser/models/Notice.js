const mongoose = require('mongoose')
//销售信息
const schema = new mongoose.Schema({
 title:{
     type:String//通知标题
 },
 content:{
     type:String//通知内容
 },
 date:{
    type: Date, default: Date.now//发布时间
 }
})

module.exports = mongoose.model('Notice',schema)
