// let module1 = require('./module1');
// let {data,text} = require('./module1');

// let module2 = require('./module2');
// let module3 = require('./module3');

// console.log(module1);
// console.log(module2);
// console.log(module3);
// console.log(data,text);
// text();


// import {data,demo,test} from './module1'
// 默认暴露的必须在前面
import bar3,{bar,bar2} from  './common'


// console.log(demo);
// console.log(data,test);
console.log(bar,bar2,bar3)
console.log('model4')