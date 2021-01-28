<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    // this.api.post('')
    this.rendering()
  },
  methods: {
    async rendering(){
      // this.api.get('/posts',{
      //   params:{
      //     id:1
      //   }
      // })
      var formData = new FormData();
        formData.append('title',21545)
        //  this.api.get('/posts'+'?id=1')
     await  this.api.post('/posts',formData).then(()=>{
         console.log('2')
       })   
       console.log('1')
  
    }
  }
}
</script>
