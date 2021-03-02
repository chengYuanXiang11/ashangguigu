const mongoose = require('mongoose')
//角色信息
const schema = new mongoose.Schema({
    name:{type:String},//商品名称
    jname:{type:String},//商品简介
    imgs:{type:String},//商品图片
    price:{type:String},//商品价格
   del:{type:String},//商品原价
   salesvolume:{type:String},//商品销售量
  url:{type:String},//图片
//   

})

module.exports = mongoose.model('Shou',schema,'shou')
