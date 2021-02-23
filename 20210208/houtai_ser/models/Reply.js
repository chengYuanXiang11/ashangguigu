const mongoose = require('mongoose')
//回复
const schema = new mongoose.Schema({
  name:{type:String},//要回复的用户
  bname:{type:String},//被回复的用户
    content:{type:String},//回复内容
    date:{
        type: Date, default: Date.now//发布时间
     },
     icon:{type:String,
      default:'http://localhost:3001/uploads/52730ec9ae25c5316e1b12264c782b71'},
   uid:{ type: mongoose.Schema.Types.ObjectId},//用户关联(删除)
   cid:{ type: mongoose.Schema.Types.ObjectId},//评论关联
})

module.exports = mongoose.model('Reply',schema)
