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
import * as he1 from './module1'
import {ha1,ha2} from './module2'
import module3 from './module3'
// 默认暴露的必须在前面
import model4,* as he2 from  './module4'


// console.log(demo);
// console.log(data,test);
console.log(ha1,ha2);
console.log(module3);


console.log(he1)
console.log(he2)
console.log(model4)

he2.Dog.toColor()
he2.d2.su()