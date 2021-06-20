/* webpack 是一个模块打包  此文件是webpack的配置文件 webpack基于nodejs
    loader 下载后不需要引入,只需要声明,loader在内存中运行
 */


const path = require('path');
module.exports = {
    entry: path.join(__dirname, './index.js'),//入口文件
    output: {
        path: path.join(__dirname, './dist'), //输出路径
        filename: 'index.js'//输出文件名
    },//出口文件
    // mode: 'development',//工作模式 production为生产模式
    module: {
        //规则
        rules: [{
            test: /\.less$/, //匹配所有的less
            /*   use: [{
                  loader: "style-loader" //再html文档中创建一个style标签,将样式塞进09'
              }, {
                  loader: "css-loader" // 将CSS编译后的css 转换成CommonJS的一个模块
              }, {
                  loader: "less-loader" //less 编译成 CSS ,但不生成单独css，在内存中
              }] */
            use: ['style-loader', 'css-loader', 'less-loader'],//简写 顺序不能错
        }, {
            test: /\3js$/,
            exclude: /node_modules/,
            enforce: "pre",
            use: ['eslint-loader']
        }, {
            //es=>es5
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            }
        }

        ]
    }
} 
