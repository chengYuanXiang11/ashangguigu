const mongoose = require('mongoose')
//评论
const schema = new mongoose.Schema({
    name:{type:String},//发表评论用户
    content:{type:String},//评论内容
    date:{
        type: Date, default: Date.now//发布时间
     },
     icon:{type:String,
    default:'http://localhost:3001/uploads/52730ec9ae25c5316e1b12264c782b71'},
   uid:{ type: mongoose.Schema.Types.ObjectId},//用户关联
   pid:{ type: mongoose.Schema.Types.ObjectId}//通知关联
})

module.exports = mongoose.model('Comment',schema)
