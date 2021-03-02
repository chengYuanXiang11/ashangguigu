(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.demo = demo;
exports.test = test;
// module.exports.a =0;

// let obj={
//     data:'1',
//     name:'cheng',
//     text(){
//         console.log(this.data);
//     }
// }
// module.exports= obj;

var data = exports.data = '2020';

function demo() {
    console.log('m1 demo函数');
}
function test() {
    console.log('m1 test函数');
}
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// let obj={
//     data:'1',
//     name:'cheng',
//     text(){
//         console.log(this.name);
//     }
// }
// module.exports= obj;
// exports.hehe = [1,2,3];

exports.default = {
    data: '1',
    name: 'cheng',
    text: function text() {
        console.log(this.name);
    }
};
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.bar = bar;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var t1 = exports.t1 = [1, 2, 3, 4];
function bar() {
    console.log('module4');
}

var t2 = "hello word";

var Dog = function () {
    function Dog(name, age) {
        _classCallCheck(this, Dog);

        this.name = name;
        this.age = age;
    }

    _createClass(Dog, null, [{
        key: 'toColor',
        value: function toColor() {
            console.log(this.name);
        }
    }]);

    return Dog;
}();

var Dog2 = function (_Dog) {
    _inherits(Dog2, _Dog);

    function Dog2(name, age, color) {
        _classCallCheck(this, Dog2);

        var _this = _possibleConstructorReturn(this, (Dog2.__proto__ || Object.getPrototypeOf(Dog2)).call(this, name, age));

        _this.color = color;
        console.log(new.target.name);
        return _this;
    }

    _createClass(Dog2, [{
        key: 'su',
        value: function su() {
            console.log(new.target);
        }
    }]);

    return Dog2;
}(Dog);

var d1 = new Dog('xb', 5);
var d2 = new Dog2('wc', 3, '#fff');
exports.t2 = t2;
exports.d1 = d1;
exports.d2 = d2;
exports.Dog = Dog;
exports.default = {
    "school": 'hngy'
};
},{}]},{},[1]);
