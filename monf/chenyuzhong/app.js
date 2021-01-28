const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.createConnection('mongodb://127.0.0.1:27017/cheng')

db.on('open',()=>{
    console.log('数据库连接成功')
})
db.on('error',(err)=>{
    console.log('数据库连接失败')
    console.log(err)
})

let UserSchema = new mongoose.Schema({
    name: String,
    age: Number
},{versionKey: false})
let User = db.model('users',UserSchema)
// new User({
//     name: 'cyx',
//     age: 18
// }).save()
// .then((data)=>{
//     console.log('存储成功')
//     console.log(data)
// })
// .catch(()=>{
//     console.log('错了错了')
// })


const app = express()

app.get('/',async (req,res)=>{
    const data = await User.find()
    .then(data => {
        return data
    })

    res.send(data)
})

    



app.listen(3000)