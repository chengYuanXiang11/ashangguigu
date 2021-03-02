// 定义一个无依赖的module1

define(function(){
    //数据——-私有数据(只读)
    let data = 'atguigu';
    //获取数据的方法
    function getDataL(){
        return data.toLocaleLowerCase()
    }
    function getDataU(){
        return data.toLocaleUpperCase()
    }
    return{getDataL,getDataU}
})