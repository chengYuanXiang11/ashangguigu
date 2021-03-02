let mongoose = require('mongoose');

//数据库连接模块
require('./db/db')();

//骨架模块
const router = require('./router/ce');  //  引入路由

// mongoose.connect('mongodb://localhost:27017/cesar',{
//     useNewUrlParser:true, //使用一个新的URL解析器,用于解决一些安全性问题
//     useFindAndModify:false,
//     useCreateIndex:true,
//     useUnifiedTopology: true//使用一个统一的新的拓扑结构
// },function(error){
//     // 检查错误，初始化连接。回调没有第二个参数。

//     if(error){
//         console.log('cccccccccc');
//   }else{
//     console.log('kook');
//   }
// });

//定义规则(骨架)
// var studentsModule = new mongoose.Schema({
//     name:{type:String,
//         required:true,//必填项
//         unique:true,//学号唯一
//         // default:'name'//未输入时默认
//     },//收货人
// 	shanghais:[String],//必须是一个数组,数组中的每一项必须是字符串
// 	cname:{type:String},//地区
//     date:{
// 	    type: Date,
//          default: Date.now()//默认值发布时间
// 	 },
//     //  iago: Schema.Types.Mixed,//接收任意类型c
// 	ok:{type:Boolean,
// 	default: false},//是否配送完成
// 	pid:{ type: mongoose.Schema.Types.ObjectId},//评论关联
// 	 uid:{ type: mongoose.Schema.Types.ObjectId}//用户关联
// });
// //实现 生产某个集合对应的模型(对象)
// var sutM =mongoose.model('students',studentsModule);
// module.exports = mongoose.model('Dingdong',schema,)
