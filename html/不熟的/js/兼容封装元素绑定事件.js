// 兼容封装元素绑定事件
function addevent(obj,eventType,cb,isBubble){
    //添加时间对象    事件类型   回调   冒泡或者捕获
    if(obj.addEventListener){
        obj.addEventListener(eventType,cb,isBubble);
    }else{
        obj.attachEvent('on'+eventType,cb,isBubble);
    }
}




var d1 = document.querySelector('.d1');

function f1(){console.log('f1')};
addevent(d1,'click',f1,false);