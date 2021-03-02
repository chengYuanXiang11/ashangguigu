const mongoose = require('mongoose')
const schema = new mongoose.Schema({
	money:{type:String},
	type:{type:String},
	starecon:{type:String},
	endcon:{type:String},
	stareDate:{type:String},
	endDate:{type:String},
	 uid:{ type: mongoose.Schema.Types.ObjectId},//用户关联
	 sid:{ type: mongoose.Schema.Types.ObjectId}//商家关联
})
module.exports = mongoose.model('Hongbao',schema,'hongbaos')
