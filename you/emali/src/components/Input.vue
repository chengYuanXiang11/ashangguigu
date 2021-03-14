<template>
  <div class="inputs">
    <div class="entry" @click="entryclick">
      <template v-if="emailARR">
        <div
          v-for="(item, index) in emailARR"
          :key="index"
          ref="textValue"
          @mouseenter="livwe1"
          @mouseleave="livwe"
          @click.stop="livweclick(index)"
          :class="[
            item.bg == '1' ? 'blue' : '',
            item.type == '2' ? 'red' : '',
            item.type == '1' ? 'yellow' : '',
          ]"
        >
          <span> {{ item.name }}</span
          ><span>{{ item.suffix }}</span>
        </div>
      </template>
      <div class="entry2">
        <input
          class="input-msg inp"
          ref="msg"
          :style="{ width: inputWidth + 'px' }"
          v-model="emailString"
          @input="changeText"
          @click="editText"
          @blur="defocus"
          @keydown.enter.prevent.stop="enterMsg"
          @keydown.delete.stop="inputdeleteMsg"
        />

        <pre class="controlwidth" ref="control">{{ this.emailString }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "inputs",
  data() {
    return {
      flag: true,
      //当前选中的span
      int: undefined,
      //宽度
      inputWidth: 120,
      emailARR: this.emailArr,
    };
  },
  props: {
    //邮箱列表
    emailArr: {
      type: Array,
    },
  },
  computed:{
    ...mapGetters({str:'EmailStr'}),
    emailString: {
           get() {
            return this.str
            },
            set(val) {
              this.$store.commit('SET_EMAILSTR',val)
            }
        }
  },
  mounted() {
    let that = this;
    document.addEventListener("click", this.eliminate, false);
    document.onkeydown = function (e) {
      let key = window.event.keyCode;
      if (key == 8 && that.str == "") {
        that.deleteMsg(that.int);
         if(this.$refs["msg"].blur){
             console.log(this.$refs["msg"].blur)
            this.$refs["msg"].blur()
        }
      }
    };
  },
  methods: {
    inputdeleteMsg(e) {
      if (e.target.value.length <= 0) {
        this.deleteMsg(this.int);
      }
    },
    defocus() {
      this.add();
    },
    //清除背景颜色
    eliminate(){
      this.$store.commit("ELIMINATE", this);
      this.int = undefined;
    },
    add() {
        this.$store.commit('ADDJUDGE',this)
    },
    changeText(e) {
      this.$nextTick(() => {
        this.inputWidth = this.$refs["control"].clientWidth + 12;
      });
      let obja = e.srcElement;
      obja.focus();
      //input宽度0，对照pre宽度动态设置
      if (e.data == ";") {
        this.add();
        e.target.innerText = "";
      }
      // this.$emit("input", this.$el.value);
    },
    editText(ed) {},
    deleteMsg(index) {
      if (index != undefined) {
        this.emailARR.splice(index, 1);
        this.int = undefined;
      } else {
        this.emailARR[this.emailARR.length - 1].bg == undefined
          ? this.$set(this.emailARR[this.emailARR.length - 1], "bg", "1")
          : "";
        this.int = this.emailARR.length - 1;
      }
    },
    enterMsg() {
      this.add();
    },
    // 鼠标移入 背景
    livwe1(e) {
      if (e.target.nodeName == "DIV") {
        e.target.style.background = "#ececec";
      }
    },
    //鼠标移出背景还原
    livwe(e) {
      if (e.target.nodeName == "DIV") {
        e.target.style.background = "";
      }
    },
    livweclick(index) {
      if (index == this.int) {
        return;
      } else if (this.int !== "undefined") {
        this.eliminate();
      }
      // 否则选中最后一个
      this.emailARR[index].bg == undefined
        ? this.$set(this.emailARR[index], "bg", "1")
        : "";
      this.int = index;
    },
    entryclick() {
      this.$refs["msg"].focus();
    },
  },
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.content {
  display: flex;
  justify-content: center;
  font-family: "lucida Grande", Verdana, "Microsoft YaHei";
  font-size: 12px;
  color: #006699;
}
a {
  cursor: pointer;
}
a:hover {
  border-bottom: 1px solid #006699;
}
.left {
  display: flex;
}

.right {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: baseline;
}
.red {
  color: red;
}
.yellow {
  color: #c5bb62;
}
.entry {
  display: flex;
  flex-flow: row wrap;
  max-width: 540px;
  min-width: 540px;
  background-color: #f9f8fa;
  padding: 2px 2px 0 2px;
  border: 1px solid #c3c3c3;
  border-top: 1px solid #7c7c7c;
  border-left: 1px solid #9a9a9a;
  cursor: text;
}
.entry2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-msg {
  line-height: 17px;
  min-height: 17px;
  border: 0;
  font-size: 12px;
  display: flex;
  flex: 1;
  padding: 2px 2px 0 2px;
  max-width: 540px;
  width: 1em;
  cursor: text;
  outline: none;
  background-color: #f9f8fa;
}

.input-msg:empty:before {
  content: "";
}
.controlwidth {
  position: fixed;
  bottom: -8998888px;
}
.blue {
  background-color: #006b8e !important;
  color: #f9f8fa !important;
}
</style>
