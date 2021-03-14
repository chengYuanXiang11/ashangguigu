<template>
  <div class="Emali">
    <div class="content">
      <div class="left">
        <div class="shou">
          <a>收件人
            <!-- {{emailArr}} -->
          </a>
        </div>
      </div>
      <div class="right">
        <Input    :emailArr ="emailArr"/>
        <div>
          <a>添加抄送</a>
          <span>-</span>
          <a>添加密送</a>
          <span>|</span>
          <a>分别发送</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input'

export default {
  name: "Emali",
  components: {
    Input
  },
  data() {
    return {
      flag: true,
      //当前选中的span
      int: undefined,
      string: "",
      //宽度
      inputWidth: 120,
      value: [
        {
          name: "1511251299",
          suffix: "@qq.com;",
          type: 0,
        },
        {
          name: "1511251299",
          suffix: "@qdasfq.com;",
          type: 1,
        },
        {
          name: "15fsdfsd;",
          suffix: "",
          type: 2,
        },
      ],
    };
  },
  props: {
    //邮箱列表
    emailArr: {
      type: Array,
      default: () => [],
    },
  },

  mounted() {
    let that = this;
    document.addEventListener("click", this.eliminate, false);
    document.onkeydown = function (e) {
      let key = window.event.keyCode;
      if (key == 8 && that.string == "") {
        that.deleteMsg(that.int);
        that.$refs["msg"].blur();
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
    eliminate() {
      this.value.map((value, key, arr) => {
        if (value.bg !== "undefined") {
          this.$delete(value, "bg");
        }
      });
      this.int = undefined;
    },
    add() {
      if (this.string == ";" || this.string == "") {
        this.string = "";
        return "";
      }
      let bottomstr = this.string.slice(-1);
      if (bottomstr !== ";") {
        this.string += ";";
        this.add();
      }
      let ne2 = 0;
      let ne1 = 0;
      let type = 0;
      let filter = /[a-zA-Z0-9_]{1,}[@][a-z0-9]{2,3}[.][a-z]{2,3}/;
      if (!filter.test(this.string)) {
        type = 1;
      }
      let int = this.string.indexOf("@");
      ne2 = this.string.slice(int);
      ne1 = this.string.slice(0, int);
      if (int == "-1") {
        ne2 = "";
        ne1 = this.string.slice(0);
        type = 2;
      }

      let obj = {
        name: ne1,
        suffix: ne2,
        id: this.value.length,
        type: type,
      };
      let keypush = true;
      for (let i = 0; i < this.value.length; i++) {
        if (this.value[i].name + this.value[i].suffix === this.string) {
          keypush = false;
        }
      }
      if (keypush) {
        this.value.push(obj);
      }
      this.string = "";
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
      this.$refs["msg"].blur();
      if (index != undefined) {
        this.value.splice(index, 1);
        this.int = undefined;
      } else {
        this.value[this.value.length - 1].bg == undefined
          ? this.$set(this.value[this.value.length - 1], "bg", "1")
          : "";
        this.int = this.value.length - 1;
      }
    },
    enterMsg(e) {
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
      this.value[index].bg == undefined
        ? this.$set(this.value[index], "bg", "1")
        : "";
      this.int = index;
    },
    entryclick() {
      this.$refs["msg"].focus();
    }
  }
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
