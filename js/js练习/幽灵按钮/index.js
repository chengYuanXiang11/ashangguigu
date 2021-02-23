var box = document.querySelector('#box');
var top1 = document.querySelector('.top');
var bottom1 = document.querySelector('.bottom');

box.onmouseenter=function(){
    top1.style.width = '200px';
    bottom1.style.width = '200px';

}
box.onmouseleave=function(){
    top1.style.width = '0px';
    bottom1.style.width = '0px';

}