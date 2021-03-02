let mongoose = require('mongoose')
const sutM = require('../module/Ce')

//使用规则
sutM.create({
    name:'R',
	shanghais:['D','E'],//必须是一个数组,数组中的每一项必须是字符串
    iago:'Schema.Types.Mixed',//接收任意类型
	ok:'false',//是否配送完成
},function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});