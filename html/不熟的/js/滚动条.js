var content = document.querySelector(".warp");
var scrollBar = document.querySelector(".scrollBar");
var scrollIn = document.querySelector(".scrollBar .scrollIn");
    // 屏幕高度 / 内容高度 = 滚动条高度 / 可滚动高度(屏幕高度) = 吨动态移动距离/内容滚动距离
// document.documentElement.clientHeight /content.offsetHeight =  scrollIn.style.height / dc
// 所以滚动条高度为 
scrollIn.style.height =  Math.ceil((document.documentElement.clientHeight /content.offsetHeight) * document.documentElement.clientHeight) + 'px';


//鼠标滚轮事件
var flag = true;
document.addEventListener('mousewheel',function(event){
    event = event || window.event;
    if(event.wheelDelta){
        if(event.wheelDelta>0){
            flag = true;
        }else{
            flag = false;
        }
    }else if(event.detail){
        if(event.detail>0){
            flag = true;
        }else{
            flag = false;
        }
}
if(flag){
    scrollIn.style.top = scrollIn.offsetTop - 30 +'px';
    jie();
    warptop();
}else{
    scrollIn.style.top = scrollIn.offsetTop + 30 +'px';
    jie();
    warptop();
}
console.log(scrollIn.style.top)

})

//滚动条事件
scrollIn.onmousedown=function(event){
    event = event || window.event;
    var heiY = scrollIn.offsetTop;
    var disY = event.pageY;
        document.onmousemove=sa;
        document.onmouseup=function(){
        document.onmousemove =  document.onmouseup= null;
		// scrollIn.releaseCapture&& scrollIn.releaseCapture();
         }
         function sa(event){
            event = event || window.event;
            var event = event || window.event;
            var eleY = event.pageY;
            if(heiY +(eleY - disY)>2){
                //减少多余判断
                scrollIn.style.top = heiY +(eleY - disY) +'px';
               jie();
               warptop();
            }
        }
}
//滚动条边界值
function jie(){
    if(scrollIn.offsetTop<=5){
        scrollIn.style.top='0px';
        content.style.top = '0px';
    }
    if(scrollIn.offsetTop>=(document.documentElement.clientHeight-scrollIn.offsetHeight)){
        scrollIn.style.top=(document.documentElement.clientHeight-scrollIn.offsetHeight) +'px';
    }
}
//内容滚动距离,左侧内容滚动距离与滚动条滚动距离成比例,给滚动条设置边界同样可以限制左侧内容区域
function warptop(){
    var heieY = content.offsetHeight * ( scrollIn.offsetTop /document.documentElement.clientHeight );
    content.style.top = -(heieY) +'px';
}


function Foo(){
    getName = function(){
        console.log(1);
    }
    return this
}
Foo.getName = function(){
    console.log(2); //1
}
Foo.prototype.getName = function(){
    console.log(3);
}
var getName = function(){
    console.log(4);
}

function getName(){
    console.log(5);
}

Foo.getName() //2
getName()  //4 预解析
Foo().getName();// 1
getName() //1
new Foo.getName(); //2
new Foo().getName() //3
new new Foo().getName() //3
