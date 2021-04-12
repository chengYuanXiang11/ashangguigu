// //引入mockjs
// import Mock from 'mockjs'
// //使用mockjs模拟数据
// Mock.mock('/\/api\/msdk\/proxy\/query_common_credit/', {
//     "ret":0,
//     "data":
//       {
//         "mtime": "@datetime",//随机生成日期时间
//         "score|1-800": 800,//随机生成1-800的数字
//         "rank|1-100":  100,//随机生成1-100的数字
//         "stars|1-5": 5,//随机生成1-5的数字
//         "nickname": "@cname",//随机生成中文名字
//       }
// //data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
// });
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
