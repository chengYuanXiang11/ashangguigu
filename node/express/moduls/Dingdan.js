const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String},//收货人
	cname:{type:String},//地区
	Zprice:{type:String},
	img:{type:String},
	canju:{type:String},
	peisongfei:{type:String},
	dabaofei:{type:String},
	shangjian:{type:String},
	dizhi:{type:String},
	date:{
	    type: Date, default: Date.now//发布时间
	 },
	ok:{type:Boolean,
	default: false},//是否配送完成
	pid:{ type: mongoose.Schema.Types.ObjectId},//评论关联
	 uid:{ type: mongoose.Schema.Types.ObjectId}//用户关联
})
module.exports = mongoose.model('Dingdan',schema,)
