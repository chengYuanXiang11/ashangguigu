const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  // icon:{type:String},
    username:{type:String,
	unique:true},//用户名
    password:{type:String},//电话
		email:{type:String},//邮箱
    phone:{type:String},//邮箱
})
module.exports = mongoose.model('Login',schema)
