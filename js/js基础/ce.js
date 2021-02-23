// 1. 
//     a == 1 && a==2 && a == 3
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


// let value = 1;
// Object.defineProperty(window,'a',{
//     get() {
//         console.log(value)
//         return value++
//     }
// })
// // Object.defineProperty(window, 'a', {
// //     get() {
// //         return value++
// //     }
// // })
// if (a === 1 && a === 2 && a === 3) {
//     console.log("Hi Libai!")}

// 2.
    // var int =document.querySelectorAll('input');
    // var but =document.querySelectorAll('button');
    // but[0].onclick=function(){
    //     for(var i =0;i<int.length;i++){
    //         int[i].checked = true;
    // }}
    // but[1].onclick=function(){
    //     for(var i =0;i<int.length;i++){
    //         int[i].checked = false;
    // }}
    // but[2].onclick=function(){
    //     for(var i =0;i<int.length;i++){
    //         int[i].checked = !int[i].checked;
    // }}