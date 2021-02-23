const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  icon:{type:String,
    default: 'http://localhost:3001/uploads/52730ec9ae25c5316e1b12264c782b71'},
    username:{type:String,//z'h
    unique:true},
    name:{type:String},//用户名
    tel:{type:String},//电话
    emali:{type:String},//邮箱
    synopsis:{type:String},//简介
    date:{type:String},//生日
    gender:{type:String},//性别
    password:{type:String
        // select:false取不到的
        // set(val){
        //     return require('bcryptjs').hashSync(val, 10)
        // }
    },
    user: {
      type:String,
      default: 'user'
    },//权限
    state:{
      type:Boolean,
      default: true
    }
})
module.exports = mongoose.model('Login',schema)
