const mongoose = require('mongoose')
const schema = new mongoose.Schema({
	orgId:{type:Number},//所属机构
	name:{type:String},//用户名
	mobile:{type:String},//联系方式
	password:{type:String},//密码
	comment:{type:String},//新密码
	roleList:{type:Array},//用户列表
	account:{type:String},//登录账户
	account:{type:String},//用户邮箱
	address:{type:String},//用户地址
	id:{type:Number},//用户地址
	type:{type:Number}

})
module.exports = mongoose.model('User',schema)
