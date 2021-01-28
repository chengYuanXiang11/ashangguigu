import axios from 'axios'

// axios({
//     method:'get',
//     url:'http://localhost:3000/posts',
   
// }).then((res)=>{
//     console.log(res)

//     console.log(res.status)
// })

const service=axios.create({
    baseURL:'http://localhost:3000',
    timeout:10000,
    headers:{}
})
export default service