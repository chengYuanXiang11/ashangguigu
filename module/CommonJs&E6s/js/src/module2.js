// exports.haha = function(){
//     console.log('haha');
// }

// arr私密数据
let arr = [1,3,5];
let obj={
    arr,
    text(){
        console.log(this.art)
    }
}

// //统一暴露 精简写法
// export{arr}

export{
    arr  as  ha1,
    obj  as  ha2
}