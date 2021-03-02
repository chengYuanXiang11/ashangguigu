const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String},//收货人
	region:{type:String},//地区
	address:{type:String},//详细地址
    phone:{type:String},//手机号
	label:{type:String},//地址类型
	defaultd:{type:Boolean,
	default: false},//是否默认地址
	gender:{type:String},
	 uid:{ type: mongoose.Schema.Types.ObjectId}//用户关联
})
module.exports = mongoose.model('Site',schema,)
