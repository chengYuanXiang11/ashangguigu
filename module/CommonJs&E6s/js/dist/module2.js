"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// exports.haha = function(){
//     console.log('haha');
// }

// arr私密数据
var arr = [1, 3, 5];
var obj = {
    arr: arr,
    text: function text() {
        console.log(this.art);
    }
};

// //统一暴露 精简写法
// export{arr}

exports.ha1 = arr;
exports.ha2 = obj;