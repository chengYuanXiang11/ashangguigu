const mongoose = require('mongoose')
//角色信息
const schema = new mongoose.Schema({
    username:{type:String},//商品所属用户
    category:{type:String},//商品分类
    name:{type:String},//商品名称
    imgs:{type:String},//商品图片
    content:{type:String},//商品介绍
    price:{type:String},//商品价格
    zie:{type:Array},//尺寸
    color:{type:Array},//商品颜色
   fid:{ type: mongoose.Schema.Types.ObjectId},//分类关联
   uid:{ type: mongoose.Schema.Types.ObjectId},//用户关联
})

module.exports = mongoose.model('Category',schema)
