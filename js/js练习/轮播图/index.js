var left =document.querySelector('.banner .left');
var right = document.querySelector('.banner .right');
var box =document.querySelector('.banner');
box.onmouseenter=function(){
    left.style.opacity = 1;
    right.style.opacity = 1;
}
box.onmouseleave=function(){
    left.style.opacity = 0;
    right.style.opacity = 0;
}