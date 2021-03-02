const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    password:{type:String},//电话
	email:{type:String},//邮箱
    phone:{type:String},//邮箱
	verification:{type:String}

})
module.exports = mongoose.model('session',schema,'sessions')
