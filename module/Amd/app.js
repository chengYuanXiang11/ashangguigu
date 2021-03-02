// 在AMD中 入口文件需要写一个特殊的配置

requirejs.config({
    //By default load any module IDs from js/lib
    // path之前添加的路径
    baseUrl: './js/modules/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.

    //项目中的模块在这里注册
    paths: {
        module1: 'module1',
        module2: 'module2'

    }
});

// Start the main app logic.
requirejs(['module2'],
function   (m2) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.;
    console.log(m2())
});