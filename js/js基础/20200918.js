/*
    Android Debuggerd 
    d
    d
    decodeURI  
*/
 
// shift+alt+a 多行注释


/* 
    //输入框
    function inputBox(){
        var information = prompt('请输入信息')
        return information
    } 
*/

/* // 两位数值互相交换

function exchangeValues(a,b){
    a = a + b;
    b = a - b;
    a = a - b;
    return [a,b]
}
var [a,b] = exchangeValues(1,2)
*/

    //通用两位交换
/*  function exchangeCharacters(a,b){
     let c =''
     c = a;
     a = b;
     b = c;
     return [a,b]
 }
 var [a,b] = exchangeCharacters('a1','2b') */


/*
    //数字最大值 最小值
    console.log(Number.MAX_VALUE)
    console.log(Number.MAX_VALUE * 'dd')
     console.log(Number.MAX_VALUE*2)
    console.log(Number.MIN_VALUE)
    console.log(-Number.MAX_VALUE*2)
 */


/*
//数值转换
 var int = '1024.2445 dd'
 console.log(parseInt(int))     //1024
 console.log(parseFloat(int))   //1024.2445
 console.log(Number(int))       //NAN
 */



/*
//switch
 switch('1'){
    case '1':
        console.log('1');
        break
    case 2:
        console.log('2');
    case '3':
        console.log('3');
        default:
        console.log('mm')
 } */



/* 
打印 0-n
var a1= prompt('a1')
 for (let i = 0; i <a1; i++) {
    let s =''
    for (let j = 0; j <= i; j++) {
        s += j
    console.log(s)
    }

 } */


/* // 九九乘法表 multiplication table
function multiplicationTable(){
    for (let i = 1; i < 10; i++) {
        for(let j=1;j<=i;j++){
            document.write(i+'*'+j+'&nbsp')
        }
        document.write('<br/>')

    }
}
 */


/* let i=0
while(i<=10){
    console.log(i)
    i++;
} */

/* let i=0
do {
    console.log(i)
    i++;
} while (i<=10);
 */


/* // an isosceles triangle 等腰三角形
function triangle (index){
    for (let i = 0; i < index; i++) {
        //打印空格
        for(let n=0;n<index-i;n++){
            document.write('&nbsp')
        }
        // 打印图形
        for (let j = 0; j < 2*i-1; j++) {
            document.write('*')
        }
        document.write('<br/>')
    }
}
 */


/* //冒泡排序
function solted(a){
    for (let i = 0; i < a.length; i++) {
        for(let j=0;j<a.length-1-i;j++){
            if(a[j]>a[j+1]){
                var b=a[j]
                a[j]=a[j+1]
                a[j+1] = b
            }
        }

    }
    console.log(a)
} */


/* // 匿名函数自调用 防止污染
(function(){
    var a = 1;
    var b = 2
    return a+b
})() */




/*
    var a ={
        name:'cheng',
        age:15
    }
    var b=[1,2,3]

    for(let key in a){
        console.log(a[key])
    } 
*/



/*
    function Person(name,age){
        this.name = name
        this.age = age
    }

    var person =new Person(1,2)
 */





/* 
    function Person(name,age){
        this.name = name
        this.age = age
    }
    var ac ={
        name:'cheng',
        age:15
    }
    function f1(a){
        a.name='111'
        a = new Person('1','2','3')

    }
    f1(ac)
 */




/* 
var a =1.51

var b =[1,2,3,4]
//向下取整
Math.floor(a)
//向上取整
Math.ceil(a)
//四舍五入
Math.round(a)

Math.max(...b)
Math.max.apply(null,[1,2,3])
Math.min(...b)
Math.min.apply(null,[1,2,3])

// π
Math.PI

// 2的2次方
Math.pow(2,2)

// 随机数
Math.random() */


/* 
    // 时间对象
    var date = new Date()
    // 年
    date.getFullYear()
    // 月
    date.getMonth()
    // 日
    date.getDate()
    // 小时
    date.getHours()
    // 分钟
    date.getMinutes()
    // 秒
    date.getSeconds()

    //当前日期 "2020/9/20"
    date.toLocaleDateString()

    // 当前时间 "下午10:54:13"
    date.toLocaleTimeString()

    //从1970 01 01  到现在毫秒数
    date.getTime()
 */



/* //获取当前时间
(function currentTime(){
    var date = new Date()
    // date = date.getTime()
    var y = date.getFullYear()
    var m = date.getMonth()
    var d = date.getDate()
    var h = date.getHours()
    var mm = date.getMinutes()
    var s = date.getSeconds()
    console.log(y+'-'+m+'-'+d+' '+h+':'+mm+':'+s)
})() */


// 包装类
/* var arr=[[1,2,3],[4,5,6]]

function twoArr(arr){
    for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        twoArr(arr[i])
    }else{
        console.log(arr[i])

    }

    }
}

twoArr(arr) */


    //字符串方法  20200921
        // es5
    var str = '12das5f4a8f4f74a8gag'
    // *****
    str.charAt(8)               //返回第8个字符
    str.concat('123')           //返回拼接后字符串 不改变原字符串
    str.indexOf('2')            //检索字符串
    str.indexOf('2',5)          //从第5未开始 检索字符串 返回第一次查到的位置
    str.lastIndexOf('2')        //自后向前剑圣字符串
    str.lastIndexOf('2',5)      //自后向前剑圣字符串

    str.length                  //返回字符串长度     

    str.match(/a/ig)            //返回 一个或多个正则的匹配

    str.replace(/12/ig,'**')    //正则匹配第一个参数 替换成第二个参数

    str.search(/12/ig)          //正则匹配子串 ，返回包含子串的数组

    str.slice(6,9)              //从第6位开始抽取到第9位

    str.split('')               //将字符串根基‘’为分割标准转化为数组
    str.split('12')             //["", "das5f4a8f4f74a8gag"]
    
    str.substr()                //功能与slice类似 但第二参数不允许为负数

    str.toLocaleLowerCase()     //大写转换

    str.toLocaleUpperCase()     //小写转换

    str.toString()              //转换为字符串

    str.toLowerCase()           //小写

    str.toUpperCase()           //大写

    str.valueOf()               //原字符

    str.charCodeAt(8)

//     valueOf偏向于运算，toString偏向于显示。

// 在进行对象转换时，将优先调用toString方法，如若没有重写 toString，将调用 valueOf 方法；
// 果两个方法都没有重写，则按Object的toString输出。

// 在进行强转字符串类型时，将优先调用 toString 方法，强转为数字时优先调用 valueOf。

// 使用运算操作符的情况下，valueOf的优先级高于toString。
    // class A{
    //     constructor(a){
    //         this.a = a;
    //     }
    //     toString(){
    //         return this.a++;
    //     }
    //     value(){
    //         return this.a++;
    //     }
    // }
    
    // const a = new A(1);
    // console.log(a == 1 && a==2 && a == 3 );

//     全等(===)：严格等于不会进行隐式转换，这里使用 Object.defineProperty 数据劫持的方法来实现
    
// let value = 1;
// Object.defineProperty(window,'a',{
//     get( ){
//         return value++
//     }
// })

// if (a === 1 && a === 2 && a === 3) {
//     console.log("Hi Libai!")}

    
// 查询字符串中出现最多的字符和次数 用对象
// var str2="1234561234444455566";
// var obj2={ };
// for(var i=0;i<str2.length;i++){
//     if(obj2[str2[i]]){
//         obj2[str2[i]]++
//     }else{
//         obj2[str2[i]] = 1
//     }
// }
// console.log(obj2)  //{1: 2, 2: 2, 3: 2, 4: 6, 5: 4, 6: 3}





    // es6

    str.includes('12')          //判断字符串中是否存在子串
    str.startsWith('12',0)        //判断字符串是不是以子串开头 第二个参数是起始位置
    str.endsWith('ag',0)          //判断字符串是不是以子串结尾  第二个参数是起始位置

    str.repeat(2)               //字符串重复2次


    var arr =[1,2,3,1,2,3]

    arr.indexOf(1)
    arr.lastIndexOf(1)
    arr.reverse()

    var foreacharr=arr.forEach((value,key,arr)=>{  //只是遍历 返回undefined 不改变原数组
        //1 0 (6) [1, 2, 3, 1, 2, 3]
       return value+=1
    })
    console.log(foreacharr) //undefined
    console.log(arr)        //(6) [1, 2, 3, 1, 2, 3]


    var maparr=arr.map((value,key,arr)=>{   //遍历并操作 返回新数组 不改变原数组
        return value+=1

    })
    console.log(maparr)  //(6) [2, 3, 4, 2, 3, 4]
    console.log(arr)       //(6) [1, 2, 3, 1, 2, 3]


    var filterarr= arr.filter((value,key,arr)=>{ //遍历并返回符合条件的值 组合成新数组 不改变原数组
        return value>1
    })
    console.log(filterarr)  //(4) [2, 3, 2, 3]
    console.log(arr)       //(6) [1, 2, 3, 1, 2, 3]


    Array.from(arr)
    Array.of(1,2,3,48)
    var findarr=arr.find((value,key,arr)=>{ //返回第一个满足的元素
        return value>2
    })
    console.log(findarr)       

    var findindexarr=arr.findIndex((value,key,arr)=>{ //返回第一个满足的元素的下标
        return value>2
    })
    console.log(findindexarr)  

// 判断字符串中最多出现的字符和次数 
    // 方法1
//  var len = str.split('')
// var json=[]
// var json2=[]

// for (let i = 0; i < len.length; i++) {
//     if(!json.includes(len[i])){
//         json.push(
//            len[i]
//         )
//         json2.push(
//            1
//          )

//     }else{
//        json2[json.indexOf(len[i])]+=1
//     }
// }
// console.log(json,json2)
// console.log('最多是'+json[json2.indexOf(Math.max.apply(null,json2))]+'出现了'+Math.max.apply(null,json2)+'次') 
    

// // 方法2
// var json3={}
// var value=null;
// var key= 0;
// for (let i = 0; i < str.length; i++) {
//     var char = str.charAt(i)
     
//         json3[char]? json3[char] +=1:json3[char] = 1
//         if(json3[char]>key){
//             value = char
//             key =  json3[char]
//         }
       
// }
// console.log(value,key)
// // var c = Math.max.apply(null,json2)


// var c = Math.max.apply(Math,[json2].map((value)=>{console.log(value)}))
// console.log(c)


// // 方法3
// var json3={}
// var values=null;
// var keys= 0;
// var arr=[1,2,3,4,5]
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// str.split('').reduce((total,value,key,arr)=>{
//     var char = str.charAt(key)
     
//         json3[char]? json3[char] +=1:json3[char] = 1
//         if(json3[char]>keys){
//             values= char
//             keys =  json3[char]
//         }
//     return value
// },0)
// console.log(values,keys)


// // 方法4(装逼用)
/* Array.prototype.getMost = function(){
    //返回值,当前元素,当前元素索引,当前元素对象
    // function(total,value,key,arr){}
    var obj = this.reduce((p,n)=>(
        p[n]++ || (p[n] =1), 
     p.max =p.max>=p[n] ? p.max : p[n],
     p.key =p.max>p[n] ? p.key : n,
        //逗号运算符返回最后一个 既返回p
     console.log(p,n),   
                    //p = {}, n = "d" 
                    //p = {d: 1, max: 1, key: "d"}, n = "d"
                    //p = {d: 1, max: 1, key: "d"}, n = "k"
     p),{}) 
     //把{}作为初始值 
     console.log(obj);

    return obj.key +''+obj.max
}
arrd =['d','k','h','yfr',4,87,'h']
arrd.getMost() */



//轮播图 点击修改 也可自动
/*  window.onload=function(){
    var num = 0
    var btn = this.document.getElementsByClassName('meta')[0]
    var imgArr=['./images/1.png','./images/2.png','./images/3.png','./images/4.png']
    var st= setInterval(() => {
        num ++;
        if(num >=imgArr.length) num = 0
        btn.src = imgArr[num%imgArr.length]
        console.log(num)
    }, 1000);
    // btn.onclick=function(ev){
    //     var ev = ev || window.event
    //     var target = ev.target || ev.srcElement
    //     console.log(target)
    //     // target.nodeName.toLowerCase() 
    //     // target = target.parentNode;
    //     num ++;
    //     if(num >=imgArr.length) num = 0
    //     btn.src = imgArr[num%imgArr.length]
    //     console.log(num)
    // }
    btn.onmouseover=function(){
        clearInterval(st);
        btn.onclick=function(){
            num ++;
        if(num >=imgArr.length) num = 0
        btn.src = imgArr[num%imgArr.length]
        }
    }
    btn.onmouseout=function(){
        st= setInterval(() => {
            num ++;
            if(num >=imgArr.length) num = 0
            btn.src = imgArr[num%imgArr.length]
            console.log(num)
        }, 1000);
    }
} */


