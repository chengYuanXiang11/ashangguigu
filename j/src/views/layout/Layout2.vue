<template>
  <!-- :class="{hideSidebar:!sidebar.opened}" -->
  <div class="app-wrapper" >
    <el-container >
      <el-aside
        v-show="lock"
        class="asideClass"
        :class="{asideTarn:true}"
        :style="{height:rootState.clientHeight + 'px',width:rootState.asideMleft+rootState.asideMleftB+'px'}"
      >
        <sidebar2 :style="{height:'100%',width:rootState.asideMleft+rootState.asideMleftB+'px'}"></sidebar2>
      </el-aside>

      <el-container
        class="containerClass containerClass"
        :style="{marginLeft:rootState.asideMleft+rootState.asideMleftB + 'px'}"
      >
        <el-header :style="{height:'auto'}">
          <Navbar2></Navbar2>
        </el-header>
        <el-main   :style="{height:rootState.clientHeight-196+ 'px'}"  >
          <AppMain2 ></AppMain2>
        </el-main>
        <el-footer>{{rootState}}</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Navbar2, Sidebar2, AppMain2 } from "@/views/layout/components/index2";
import { mapState } from "vuex";
export default {
  name: "layout",
  data(){
    return{
     lock:false,
     
    }
  },
  components: { AppMain2, Navbar2, Sidebar2 },
  computed: {
    ...mapState({
      rootState: state => state
    })
  },
  mounted(){
    this.lock =  true;
  },
  methods: {
    
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.asideClass {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transition: width 0.28s;
  overflow-x: hidden;
}
/* .asideTarn {
  transition: all 1.5s;;
} */
.containerClass {
  width: 100%;
  transition: width 0.28s;
  margin-left: 2px;
}

</style>