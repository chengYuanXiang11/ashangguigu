const mongoose = require('mongoose')
//角色信息
const Category = require('./Category')
const schema = new mongoose.Schema({
    category:{type:String,unique:true}//分类唯一
  
})

module.exports = mongoose.model('Itemize',schema)
