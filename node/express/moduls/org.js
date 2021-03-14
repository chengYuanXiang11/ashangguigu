const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    label:{type:String},//机构名称
	status:{type:String},//状态
	type:{type:Number},//机构类型
	address:{type:String}, //地址
	data:{
	    type: Date, default: Date.now//发布时间
	 },
	 //备注
	 comment:{type:String},
	 id:{type:Number},
	 parentId:{type:Number},
	org_id:{ type: mongoose.Schema.Types.ObjectId},//大小机构关联
	//  uid:{ type: mongoose.Schema.Types.ObjectId}//用户关联
})
module.exports = mongoose.model('Organ',schema,)
