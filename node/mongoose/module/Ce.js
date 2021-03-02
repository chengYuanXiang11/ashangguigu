let mongoose = require('mongoose')

var studentsModule = new mongoose.Schema({
    name:{type:String,
        required:true,//必填项
        unique:true,//学号唯一
        // default:'name'//未输入时默认
    },//收货人
	shanghais:[String],//必须是一个数组,数组中的每一项必须是字符串
	cname:{type:String},//地区
    date:{
	    type: Date,
         default: Date.now()//默认值发布时间
	 },
    //  iago: Schema.Types.Mixed,//接收任意类型c
	ok:{type:Boolean,
	default: false},//是否配送完成
	pid:{ type: mongoose.Schema.Types.ObjectId},//评论关联
	 uid:{ type: mongoose.Schema.Types.ObjectId}//用户关联
});
//实现 生产某个集合对应的模型(对象)
module.exports = mongoose.model('students',studentsModule);