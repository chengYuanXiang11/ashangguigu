const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username:{type:String},
    password:{type:String,
        set(val){
            return require('bcryptjs').hashSync(val, 10)
        }
    },
    // content:{type:String},
    // data:{type:String}
})
module.exports = mongoose.model('Login',schema)
