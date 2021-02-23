var imgNode = document.querySelector('img');
document.onmousemove = function(event){
    event = event || window.event;
    var left = event.clientX;
    var top = event.clientY;
    
    imgNode.style.left = left + 'px';
    imgNode.style.top = top + 'px';
}