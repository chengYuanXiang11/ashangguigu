<template>
  <div id="app">
    <div class="sendmsg">
      <router-view></router-view>
      <!-- <edit-div v-model="inputmsg"
                @send="send"></edit-div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
    // EditDiv: () => import(/* webpackChunkName: "editdiv" */ '@/components/email.vue')
  },
  data() {
    return {
      inputmsg: [],
      msglist: [],
      index: 0,
      tips: ''
    };
  },
  watch: {
    // inputmsg: function(newvalue) {
    //   console.log(newvalue);
    // }
  },
  methods: {
    // send() {
    //   let blank =
    //     this.inputmsg.split(' ').every(n => {
    //       return /^(&nbsp;)+$/.test(n); // 针对空格为&nbsp;的情况
    //     }) || this.inputmsg.trim().length === 0; // 普通空格的情况
 
    //   if (blank) {
    //     this.tips = '内容不能为空';
    //     return;
    //   }
    //   this.msglist.push({
    //     id: this.index++,
    //     msg: this.inputmsg
    //   });
 
    //   this.inputmsg = '';
    //   this.tips = '发送成功';
    //   this.$nextTick(() => {
    //     this.$refs.list.scrollTop = this.$refs.list.scrollHeight;
    //   });
    // }
  }
};
</script>
<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  width: 1000px;
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  background: rgba(48, 48, 48, 0);
  border-radius: 5px;
  height: 30px;
  transition: all 0.4s ease-out;
}
/* 鼠标移入出现滚动条，移出隐藏效果 */
.scroll-hover {
  overflow: scroll;
}
.scroll-hover:hover::-webkit-scrollbar-thumb {
  background: rgba(48, 48, 48, 0.4);
}
.sendmsg {
  line-height: 30px;
  display: flex;
}
.inputm {
  word-break: break-all;
  width: 200px;
  min-height: 40px;
  resize: none;
}
</style>
