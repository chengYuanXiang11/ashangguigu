// $('.bannaerlist').animate({
//     left:'-300px'
// },2000)
// 复制添加第一个节点到最后
var  aLi=$('.bannaerlist').children().first().clone(true);
var  bLi=$('.bannaerlist').children().last().clone(true);
$('.bannaerlist').append(aLi);


$('.bannaerlist').prepend(bLi);

//总时间
var timeOver = 10000;

//总切换数
var timeInt = $('.bannaerlist').children('li').size();

//每次切换跳转距离
var picWidth = $('.bannaerlist').children('li').width();

//每次切换跳转时间
var time = timeOver / timeInt;

//图片索引
var index = 1;

var seediest =null;

var flag =true;
//   mouseenter , mouseleave 快速会失效
$('.banner').mouseenter(function(){
    if(flag){
        clearInterval(seediest);
        flag =false;
    }
    $('.left').css('opacity','1');
    $('.right').css('opacity','1');


});
$('.left').click(function(){
    if(flag){
        clearInterval(seediest);
        flag =false;
    }

    index-=2;
    // if(index <=0){index =4}
    // console.log(index)
    distance()
})
$('.right').click(function(){
    if(flag){
        clearInterval(seediest);
        flag =false;
    }
    distance()
})
$('.banner').mouseleave(function(){
    if(!flag){
        seediest =setInterval(distance, time);
        flag =true;
    }
});

$('.cut').mouseleave(function(){
    if(!flag){
        seediest =setInterval(distance, time);
        flag =true;
    }
});

$('.cut').delegate('li','click',function(){
    clearInterval(seediest);
    flag =false;
    index = $(this).index();
    index++;
    var slideWidth = -1 * picWidth * index;
    $('.bannaerlist').animate({
        'left': slideWidth + 'px'//每次滑动一个图片的距离
    }, 0);//50
    // seediest =setInterval(distance, time);
})

 seediest = setInterval(distance, time);

function distance(){
    //移动的距离
    var slideWidth = -1 * picWidth * index;
    index++;
    // if(slideWidth <= (-timeInt * pcWidth)){
    //     slideWidth = 0;
    // }

    $('.bannaerlist').animate({
        'left': slideWidth + 'px'//每次滑动一个图片的距离
    }, 1000);//500的意思是动画效果要在500ms内完成
console.log(index,timeInt)
    if (index >= timeInt) {
        
        $('.bannaerlist').animate({
            'left':-picWidth + 'px'//每次滑动一个图片的距离
        }, 0);//500的意思是动画效果要在500ms内完成
        index = 2;
    }
    if(index <= 1){
        $('.bannaerlist').animate({
            'left':-picWidth *4+ 'px'//每次滑动一个图片的距离
        }, 0);//500的意思是动画效果要在500ms内完成
        index =5;
    }
}