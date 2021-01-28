const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String},
    // title:{type:String},
    // content:{type:String},
    // data:{type:String}
})

module.exports = mongoose.model('Category',schema)
