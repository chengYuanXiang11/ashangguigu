<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li 
        v-for="item in list"
        :key="item.id"
      >
        {{ item.name }} => {{ item.price }}元
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data(){
    return {
      list: []
    }
  },
  created(){
    this.$axios.get('/api/data/finnan')
      .then((res) => {
        this.list = res.data
      })
  }
}
</script>
