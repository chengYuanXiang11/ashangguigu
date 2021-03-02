// 定义一个依赖module1的module2

define([
    'module1',
], function(m1) {
    'use strict';
    let data2 = 'module2';

    function getDataL2(){
        return m1.getDataL()+data2
    }
    return getDataL2
});