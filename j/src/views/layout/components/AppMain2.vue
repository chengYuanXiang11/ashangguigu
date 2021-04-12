<template v-show="loading">
  <section class="app-main" v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)" >
      <transition name="sidebarLogoFade">
      <router-view/>
       </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain2",
  data(){
    return{
      loading:true
    }
  },
   
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  },
  watch: {
             　　'$route' (to, from) {
               console.log(this.$route)
            //  　　        switch(this.$route.query.id){
            //             case '1':this.currentView = home;break;
            //             case '2':this.currentView = list;break;
            //             case '3':this.currentView = detail;break;
            //             default:this.currentView = home;
                    }
             　　},
};
</script>
<style>
.el-scrollbar__thumb {
display: none;
}
.el-scrollbar__wrap {
overflow-x: hidden;
overflow-y: auto;
}
.sidebarLogoFade-enter-active {
  transition: opacity .5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
