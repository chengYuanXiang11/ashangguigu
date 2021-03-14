const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  // icon:{type:String},
    id:{type:String,
	  unique:true},//用户名//员工编号
    password:{type:String},//
		id_card:{type:String},//身份证号
    phone:{type:String},//电话号
    gender:{type:String},//性别
    salary:{type:String},//薪资
    entry_time:{type:Date,
      default: Date.now
      
    },//入职日期
    status:{type:Number}//是否在职
})
module.exports = mongoose.model('Login',schema)
