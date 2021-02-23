$(function(){
    $('.inner').click(function(){
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
            //  查询内容为dddd1的span元素
                $('div:contains(dddd1)').css('background','pink')
            //  查询所有隐藏元素
                $('div:hidden')
            */
       
        // $(this).append(d1); //之后
        // $(this).appendTo($('.inner:last')); //之后
        // $(this).prepend(d1); //之前
        //元素外添加
        // $(this).after(d1)
        // $(this).before(d1)
    })

    // 遍历
    // var arr =[4,7,5,1];
    // $.each(arr,function(key,value){
    //     console.log(key,value)
    // })

    // 清理前后空白
    // var str ='   dasfsaf  fdsf   '
    // console.log($.trim(str))
})
$(function(){ //dom加载完成后执行此回调
    $('.dmeta1').click(function(event){ //查询所有匹配  封装成jq对象 伪数组
        
    
        
        // console.log(event.target.innerHTML)
        // console.log(  $('.dmeta').index( $('.dmeta1')[0]))
        // $('.dmeta').css('background','pink')
        // $(this).hide()
        //$(this).show()
        // $('.dmeta1').fadeOut()
        // $('.dmeta').slideUp()
        // $('.dmeta').slideDown()
     /*    $('.dmeta').animate({
            width:'300px',
            left:'300px',
            opacity:0.6,
            height:'300px'
        })

        $('.dmeta').animate({
            width:'100px',
            left:'0px',

            opacity:1,
            height:'100px'
        })
 */

 //元素内添加
// var d1= document.createElement('div')
// d1.innerHTML = 'd1'
// $(this).append(d1)
// $(this).prepend(d1)
//元素外添加
// $(this).after(d1)
// $(this).before(d1)
     
    })
    $('.meta').click(function(event){ //查询所有匹配  封装成jq对象 伪数组
        $('div:hidden').show()
       
        // $('.dmeta').stop("slow",function(){
        //     console.log('stop')
        // })

        // console.log(event)
        //   $('.dmeta').each(function(){
        //       console.log($(this))
        //   })
        // $('.dmeta1').toggle()
        // $('.dmeta').fadeIn()
        // $('.dmeta1').fadeToggle()
        // $('.dmeta1').fadeToggle()
        // $('.dmeta').fadeTo("fadeToggle",0.7)
        // $('.dmeta').slideToggle()
    //    console.log( $('.meta').attr('src','')) 

    //删除 .dmetta
        // $('.dmeta').remove()
    //删除 .dmete的子元素
        // $('.dmeta').empty()

    })
  /*   console.log( $('.dmeta3').parent())
    console.log( $('.dmeta3').parents())
    console.log( $('.dmeta3').parentsUntil('dmeta1')) */
//    $('.dmeta1').children().css('background','red')
    // $('.dmeta1').find('.dmeta3').css('background','red')
    // console.log( $('.dmeta1').find('.dmeta2'))

   /*  同级(所有)
    console.log($('.dmeta1').siblings()) */

    //同级(下一个)
    // console.log($('.dmeta1').next())

    //同级(所有)
    // console.log($('.dmeta1').nextAll())

      //同级(两个元素之间))
    // console.log($('.dmeta1').nextUntil('.dmeta11'))

    // console.log($('.dmeta1 div').first())
    // console.log($('.dmeta1 div').last())
    // console.log($('div').filter('.dmeta1'))
    // console.log($('div').not('.dmeta1'))




})