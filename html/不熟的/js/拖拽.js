var box = document.querySelector('.box');

box.onmousedown=function(event){
    var ev = event || window.event;
    //元素初始位置
    var disLeft = box.offsetLeft;
    var disTop = box.offsetTop;
    //鼠标初始位置
    var disX = ev.pageX;
    var disY = ev.pageY;
    document.onmousemove = function(event){
        var ev = event || window.event;
        //鼠标移动距离
        var endX = ev.pageX - disX;
        var endY = ev.pageY - disY;
        //元素最终位置
        var lastX = disLeft + endX;
        var lastY = disTop + endY;

        // 处理临界值
         if(lastX < 0){
             lastX = 0;
         }else if(lastX > document.documentElement.clientWidth - box.offsetWidth){
             lastX = document.documentElement.clientWidth - box.offsetWidth;
         }
         if(lastY < 0){
            lastY = 0;
        }else if(lastY > document.documentElement.clientHeight - box.offsetHeigh){
            lastY = document.documentElement.clientWidth - box.offsetHeigh;
        }
        //最终赋值
        box.style.left = lastX + 'px';
        box.style.top = lastY + 'px';

        //碰撞问题
        var content = document.querySelector('.imgsc');
        var boxL = lastX;
        var boxT = lastY ; 
        var boxR = lastX + box.offsetWidth;
        var boxB = lastY + box.offsetHeight;
        var imgL = content.getBoundingClientRect().left;
        var imgT = content.getBoundingClientRect().top;
        var imgR = content.getBoundingClientRect().left + content.offsetWidth;
        var imgB = content.getBoundingClientRect().top + content.offsetHeight;
        if(boxR < imgL  || boxB < imgT || boxL > imgR || boxT > imgB){
            //  左 || 上 || 右 || 下
            console.log('兴安无事,岁月静好');

        }else{
            console.log('哎呀,撞上啦');

        }

    }
    box.setCapture && box.setCapture(); 
    //当鼠标点击元素之后，把鼠标的后序事件全部捕获到该元素身上。针对低版本ie清除默认行为
    
    document.onmouseup = function(){
       document.onmousemove = document.onmouseup= null;
		box.releaseCapture&& box.releaseCapture();
        //鼠标的事件全局捕获，有添加就要有释放，否则后序点击任何地方都相当于在点击box

    }
    ev.preventDefault(); //取消浏览器默认行为,dom2

    // return false; //取消浏览器默认行为,防止拖着内容走 dom0
    
}