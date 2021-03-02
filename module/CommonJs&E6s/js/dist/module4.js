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