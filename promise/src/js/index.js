function Fn() { };  
// Fn是一个函数

const fn = new Fn();
// Fn是一个构造函数,构造函数是使用的时候定义的.
// new返回的是实例对象,fn指向的是该实例对象

console.log(Fn.prototype) // Fn是一个函数对象

console.log(Fn.call({})) // Fn是一个函数对象

// 1). 同步回调: 
// 理解: 立即执行, 完全执行完了才结束, 不会放入回调队列中
// 例子: 数组遍历相关的回调函数 / Promise的excutor函数
// 2). 异步回调: 
// 理解: 不会立即执行, 会放入回调队列中将来执行
// 例子: 定时器回调 / ajax回调 / Promise的成功|失败的回调
// */

// const arr = [1, 2, 3]
// arr.forEach(item => { // 同步执行的回调函数, 不会放入回调队列, 只有当回调函数都执行完后forEach()才执行结束
// console.log('forEach callback()', item)
// })
// console.log('forEach()之后')

// setTimeout(() => { // 异步执行的回调函数, 会放入回调队列中后面才执行, 在回调执行前setTimeout()执行结束
// console.log('setTimeout callback()')
// }, 0)
console.log('setTimeout()之后')


 /* 
  目标: 进一步理解JS中的错误(Error)和错误处理
    mdn文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error

    1. 错误的类型
        Error: 所有错误的父类型
        ReferenceError: 引用的变量不存在
        TypeError: 数据类型不正确的错误
        RangeError: 数据值不在其所允许的范围内
        SyntaxError: 语法错误
    2. 错误处理
        捕获错误: try ... catch
        抛出错误: throw error
    3. 错误对象
        message属性: 错误相关信息
        stack属性: 函数调用栈记录信息
  */

  /* 1. 常见的内置error */
  // ReferenceError: 引用的变量不存在
  // console.log(a) // ReferenceError: a is not defined
  // console.log('出错之后')
 
  // TypeError: 数据类型不正确的错误
  // let b = null
  let b = {}
  // console.log(b.xxx) // TypeError: Cannot read property 'xxx' of null
  // b.xxx() // TypeError: b.xxx is not a function
  // b()

  // RangeError: 数据值不在其所允许的范围内
  function fn() { // 无限的递归
    fn()
  } // RangeError: Maximum call stack size exceeded
  // fn()

  // SyntaxError: 语法错误
  // const c = """" //  SyntaxError: Unexpected string

  // let d = 3
  // console.log(d.xxx)  // new Number(d).xxx


  /* 2. 错误的处理 */

  /* 捕获error */
  // try {
  //   const e = {}
  //   e()
  // } catch (error) {
  //   console.log(error.message)
  //   console.log(error.stack)
  // }

  // console.log('--------')


  /* 抛出error */
  function doThing() { // 当前时间如果为奇数就能正常干活, 否则不能干
    const time = Date.now()
    if (time %2== 1) {
      console.log('当前时间为奇数, 可以正常工作....' + time)
    } else {// 不能干活, 得告诉调用者
      throw new Error('当前时间为偶数, 干不了 ' + time)  // 抛出错误
    }
  }


  
   
  try { // 捕获错误
    doThing()
  } catch (error) {
    alert(error.message)
  }
   


// var addFive = num => num + 5;
// addFive(5)
// export { addFive, fn }