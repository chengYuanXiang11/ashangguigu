URL.onmouseover=function(event){
    var ev =event || window.event;
    var target = ev.target || ev.srcElement;
    target.style.backgroundColor ='red'
}

// event.keyup == 13 回车