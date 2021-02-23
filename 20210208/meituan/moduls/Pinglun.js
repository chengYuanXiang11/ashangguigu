const mongoose = require('mongoose')
const schema = new mongoose.Schema({
	did:{ type: mongoose.Schema.Types.ObjectId},
	 name: {type:String},
	 zonghe:{type:String},
	 zonghetxt:{type:String},
	 kouweitxt:{type:String},
	 baozhuanghetxt:{type:String},
	 pinglun:{type:String},
	 tupian:{type:String},
	 url: {type:String,
	 	 default:'https://cdn.uviewui.com/uview/template/SmilingDog.jpg'},
	 shipin:{type:String},
		hid:{ type: mongoose.Schema.Types.ObjectId},//回复关联
	 uid:{ type: mongoose.Schema.Types.ObjectId}//用户关联
})
module.exports = mongoose.model('Pinglun',schema,)
