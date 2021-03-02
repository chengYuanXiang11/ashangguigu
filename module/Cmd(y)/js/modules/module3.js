define( function(require, export,module) {
    let data ='444444444444444444'
    // 同步
   var module2 = require('./module2');
   module2.getData()

    // 异步
    require.async('./module3.js',function(m3){
        m3.getData()
    })

    function getData(){
        console.log(data)
    }
    module.exports = {getData}
});