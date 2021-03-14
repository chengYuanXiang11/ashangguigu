<template>
  <div class="home">
    <Emali
    :emailArr ="emailState.emailArr"
     />
  </div>
</template>

<script>
// @ is an alias to /src
import Emali from '../components/email'
import {mapState} from 'vuex'


export default {
  name: 'Home',
  data() {
    return {
       
    }
  },
  computed:{
    ...mapState({emailState:state=>state.Email})
  },
  components: {
    Emali
  }
}
</script>
