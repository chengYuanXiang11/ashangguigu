
// 模块汇总
import  mu1d  from './module1'
import { ads } from './module2'
import a from '../../json/test'
//css
import '../css/index.less';
// import {addFive,fn} from './promise'

//MOCK
 console.log(mu1d.mu1(1,2));

let x =2;
console.log(x);
            ads()



console.log(a) 
// console.log(addFive,fn) 

import Mock from 'mockjs'

const url = {
    tableDataOne: 'http://20181024Mock.com/mode1/tableDataOne',
    tableDataTwo: 'http://20181024Mock.com/mode1/tableDataTwo',
    tableDataThi: 'http://20181024Mock.com/mode1/tableDataThi',
}
  Mock.mock(url.tableDataOne, {
        'dataSource|5':[{
            'key|+1': 1,
            'mockTitle|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
            'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    })


import axios from 'axios'

// axios({
//     method:'get',
//     url:'http://localhost:3000/posts',
   
// }).then((res)=>{
//     console.log(res)

//     console.log(res.status)
// })


axios.get('http://20181022Mock.com/mode1/tableDataOne').then(response => {
  console.log(response)
}).catch(error => {
    console.log(error)
})


// webpack src/index/js -o shuchu