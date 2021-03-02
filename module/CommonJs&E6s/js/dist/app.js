'use strict';

var _module = require('./module1');

var he1 = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var he2 = _interopRequireWildcard(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// console.log(demo);
// console.log(data,test);
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
console.log(_module2.ha1, _module2.ha2);
console.log(_module4.default);

console.log(he1);
console.log(he2);
console.log(he2.default);

he2.Dog.toColor();
he2.d2.su();