$(function () {
    $('.inner').click(function () {
        // console.log($(this).html())

        // 查找兄弟元素中排第几
        // console.log($(this).index())

        /*   
         //   查询所有div
                console.log($('div'))

           //  查询所有id为d1
               console.log($('#d1'))

           //  查询所有class为demeta1
               console.log($('.demeta1'))

           //  查询所有div,span
               console.log($('div,span'))

           //  查询所有class为demeta的div元素
               console.log($('div.dmeta11')) 

           //  查询div下所有的span
               $('div span')

           //  查询div下所有的子元素span
               $('div>span').css('background','pink')

           //  查询.dmeta1的下一个span
               $('.dmeta1 + div').css('background','pink')

           //  查询.dmeta1下的所有兄弟元素
                $('.dmeta1 ~').css('background','pink')


           //  选择第一个div/最后一个div
               $('div:first').css('background','pink')

           //  div class不是dmeta1
               $('div:not(.dmeta1)').css('background','pink')

           //  第2第3个div 大于0 小于3 匹配的是索引,因为gt0,
               // 所以0被排除,剩下123,lt从1开始,所以lt(2)
               $('div:gt(0):lt(2)').css('background','pink')

           //  查询.dmeta的第2个 第3个div兄弟元素
          $('.inner ~.dmeta:lt(3):gt(0)').css('background','pink');

            //  查询.dmeta的第2个 第45个div兄弟元素
           $('.dmeta1 ~div:lt(1),.dmeta1 ~div:gt(1):lt(2)').css('background','pink')

           //  查询内容为dddd1的div元素
               $('div:contains(d1)').css('background','pink').css('background','pink')

           //  查询所有隐藏元素
               $('div:hidden').css('background','pink')
           */

        // 选择有title属性的元素
        // $('div[title]').css('background','pink')

        // 选择title属性元素为bane2的元素
        // $('div[title=bane2]').css('background','pink')

        // 选择title属性元素并且属性不为bane2的元素
        // $('div[title][title!=bane2]').css('background','pink');

        //隐藏 
        // $(this).hide(1000)
        //显示
        //  $(this).show(1000)
        //点击切换隐藏
        // $(this).toggle(1000)

        // $(this).append(d1); //添加之后
        // $(this).appendTo($('.inner:last')); //之后
        // $(this).prepend(d1); //之前
        //元素外添加
        // 后
        // $(this).after(d1)
        // 前
        // $(this).before(d1)
        // 所有替换
        // $(this).replaceWith(d1)

        //删除 .dmetta
        // $('.dmeta').remove()

        //删除 匹配的元素集合中所有的子节点。
        // $('.dmeta').empty()

    })
    //选择input
    // $('input').css('background','pink');

    // 选择所有表单元素(包括select texarea等)
    // $(':input').css('background','pink');

    //input : paasword(/) : disabled
    // $(':input:password:disabled').css('background','pink');

    // selece个数
    // $('select').css('background','pink');
    // console.log( $('select option').length)

    // 匹配所有选择的option
    // $('select option:selected').css('background', 'pink');
    // console.log($('select option:selected').html())



    // 只有一个参数的方法,一个为读,两个参数为写 html()  val()
    // 两个参数的方法,一个为读,两个参数为写 css() attr()

    // 读取元素属性并且修改
    //  $('.meta').attr('src','')

    //    读取第一个div的title属性
    // $('div:first').attr('title')

    // 给所有的div设置name属性
    // $('div').attr('name','attguigu')

    //移除所有div的title
    // $('div').removeAttr('title')

    // 给所有的div设置class
    // $('div').attr('class','guiguClass')

    // 所有div添加class
    // $('div').addClass('guiguClass')

    // 所有div删除class   
    // $('div').removeClass('guiguClass')

    // 得到最后一个li的标签文本
    // $('li:last').html()

    //点击全部选中   prop 用设置或返回被选元素的属性和值。布尔值属性
    // $('button:first').click(function(){
    //     $('.checkbox').prop('checked',true)
    // })


    // 遍历
    // var arr =[4,7,5,1];
    // $.each(arr,function(key,value){
    //     console.log(key,value)
    // this.checked = !this.checked;
    // })

    // 清理前后空白
    // var str ='   dasfsaf  fdsf   '
    // console.log($.trim(str))
})

// 设置多个css attr改变元素属性 css改变css属性
// $('p:last').css({
//     'color':'#fff',
//     'width':'300px',
//     'height':'300px'
// })

//offset 相对于页面左上角的坐标(偏移值) 只对可见元素有效
// console.log($('input:last').offset()) //a.js:157 {top: 138, left: 704.84375}
// $('input:last').offset({top: 138, left: 704.84375})

//position 相对于父元素左上角的坐标(偏移值) 只对可见元素有效
// console.log($('input:last').position()) //a.js:157 {top: 138, left: 704.84375}

//scrollTop 相对于div或者页面滚动条 的坐标(偏移值) 只对可见元素有效
// $('.derrw').scrollTop(600)
// console.log($('.derrw').scrollTop())

// 页面滚动 兼容
// $('html').scrollTop()+$('body').scrollTop()
// $('document').scrollTop() //较新版才可

// $('html,body').scrollTop(320)

// 内部尺寸 width+padding
// console.log($('.derrw').innerWidth(),$('.derrw').innerHeight())

//外部尺寸  width+padding+border
// console.log($('.derrw').outerWidth(),$('.derrw').outerHeight())

// 外部尺寸（传参） width+padding+border+margin
// outerWidth 如果传参为true 则计算外边距 默认为false 
// console.log($('.derrw').outerWidth(true),$('.derrw').outerHeight(true))


// 筛选过滤
//第一个 
// console.log($('.derrw').first())

// 最后一个
// console.log($('.derrw').last())

// 第二个
// console.log($('.derrw').eq(2))

// title属性不为hello的
// console.log($('.derrw').filter('[title!=hello]'))

// 有span子标签的.derrw元素
// console.log($('.derrw').has('option'))


// ul标签的第5个li子元素
// $('ul').children('li:eq(5)');

// ul标签的第5个后代元素
// $('ul').find('li:eq(5)');


// ul标签的父元素
// $('ul').parent()

// ul的前/后/前后的紧邻的一个同辈元素。
// $('ul').prev()
// $('ul').next()

// ul的前/后/前后的所有同辈元素。
// $('ul').prevAll()
// $('ul').prevAll()

// ul的所有同辈元素。
// $('ul').siblings()

// 淡入
// $('.dmeta1').fadeIn()
// 淡出
// $('.dmeta1').fadeOut()

// 以滑动方式隐藏元素：
// $('.dmeta').slideUp()
// 以滑动方式显示元素：
// $('.dmeta').slideDown()



//元素内添加
// var d1= document.createElement('div')
// d1.innerHTML = 'd1'
// $(this).append(d1)
// $(this).prepend(d1)

//元素外添加
// $(this).after(d1)
// $(this).before(d1)

//以每一个匹配的元素作为上下文来执行一个函数。
//   你可以使用 'return' 来提前跳出 each() 循环。
//   $('.dmeta').each(function(i){
//       this.src = "test" + i + ".jpg";
// return false; 
//   })


/*  同级(所有)
     console.log($('.dmeta1').siblings()) */

    //同级(下一个)
    // console.log($('.dmeta1').next())

    //同级(所有)
    // console.log($('.dmeta1').nextAll())

    //同级(两个元素之间))
    // console.log($('.dmeta1').nextUntil('.dmeta11'))

    // 委托
    // $('#tab').delegate('li','click',function(){
    // 解除委托
    //  undelegate


    //jq添加扩展方法
//     $.extend({
//         // 总值
//         min:function(...vae){
//         //    Math.min.apply(null,)
//             var c =[...vae].reduce((a,b)=>{
//                 return a+b
//             },0);
//            return c;
//         },
//         leftTime:function(a){
//             return a.replace(/^\s+/,'');
//         },
//         rightTime:function(a){
//             return a.replace(/\s+$/,'');
//         }
//     });
//    var maxMa= $.min(1,2,3,4)
//    console.log(maxMa)
//    console.log( $.leftTime('  ddsafdsf   fdsg '));
//    console.log( $.rightTime('  ddsafds f   fdsg '))




// 解决$冲突,释放$,此时jQuery只能用jQuery使用jQuery的函数了 $可以绑定多个
// jQuery.noConfilict() 
// jQuery(function(){})

// jq执行顺序相当于 $(document).reday()  dom加载完成
// window.onload  只能绑定一个                       外部资源等全部都加载并渲染 完成


$(function () { //dom加载完成后执行此回调
    $('.dmeta').click(function (event) { //查询所有匹配  封装成jq对象 伪数组



        // console.log(event.target.innerHTML)
        // console.log(  $('.dmeta').index( $('.dmeta1')[0]))
        // $('.dmeta').css('background','pink')


        //用于创建自定义动画的函数
        //    $('.dmeta').animate({
        //        width:'300px',
        //        left:'300px',
        //        opacity:0.6,
        //        height:'300px'
        //    },1000).animate({
        //        width:'100px',
        //        left:'0px',
        //        opacity:1,
        //        height:'100px'
        //    },1000).animate({
        //        left:'+=200px'
        //    },1000).animate({
        //        left:'-=200'
        //    },1000);
        //    //停止动画

    });
    $('.derrw').click(function (event) { 
        $('.dmeta').stop(true,true);
    })
    

    $('.meta').click(function (event) { //查询所有匹配  封装成jq对象 伪数组
        // $('div:hidden').show()

        // $('.dmeta').stop("slow",function(){
        //     console.log('stop')
        // })

        // console.log(event)


        // $('.dmeta1').toggle()
        // $('.dmeta').fadeIn()
        // $('.dmeta1').fadeToggle()
        // $('.dmeta1').fadeToggle()
        // $('.dmeta').fadeTo("fadeToggle",0.7)
        // $('.dmeta').slideToggle()
        //    console.log( $('.meta').attr('src','')) 



    })
    /*   console.log( $('.dmeta3').parent())
      console.log( $('.dmeta3').parents())
      console.log( $('.dmeta3').parentsUntil('dmeta1')) */
    //    $('.dmeta1').children().css('background','red')
    // $('.dmeta1').find('.dmeta3').css('background','red')
    // console.log( $('.dmeta1').find('.dmeta2')) 

    

    // console.log($('.dmeta1 div').first())
    // console.log($('.dmeta1 div').last())
    // console.log($('div').filter('.dmeta1'))
    // console.log($('div').not('.dmeta1'))




})