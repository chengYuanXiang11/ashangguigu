<template>
  <el-row style="height: 100%; padding: 0 20px">
    <el-col style="height: 100%">
      <div class="listTemplateContainer border hl-container">
        <DialoArea
          @upDateOrCreate="upDateOrCreate"
          @tableListTree="tableListTree"
        />
        <OperatorArea />
        <TableArea @deleteEvent="deleteEvent" @upDate="upDate" />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import DialoArea from "./dialoArea";
import OperatorArea from "./operatorArea";
import TableArea from "./tableArea";
import { mapState } from "vuex";
export default {
  components: { DialoArea, OperatorArea, TableArea },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      orgState: (state) => state.Organization,
    }),
  },

  methods: {
    // 递归方法 解决空白bug
    getTreeData(data) {
      // 循环遍历json数据
      for (var i = 0; i < data.length; i++) {
        if (data[i].children.length < 1) {
          // children若为空数组，则将children设为undefined
          data[i].children = undefined;
        } else {
          // children若不为空数组，则继续 递归调用 本方法
          this.getTreeData(data[i].children);
        }
      }
      return data;
    },
    tds(data) {
      var arr = [];
      for (var i = 0; i < data.length; i++) {
        if (typeof data[i].parentId == "number") {
          for (var j = 0; j < data.length; j++) {
            if (data[j].children == undefined) {
              data[j].children = [];
            }
            if (data[j].id == data[i].parentId) {
              data[j].children.push(data[i]);
              //  this.orgState.tableListTree = [data[j]]
            }
            //    if(data[i][j].id == data[i].parentId){
            //      data[i][j].children.push(data[i])
            //    this.orgState.tableListTree = [data[j]]
            //   this.tds(data[i][i])
            //  }
          }
        } else {
          //  this.orgState.tableListTree = data
          //  console.log(  this.orgState.tableListTree)
        }
      }
      data.forEach((value) => {
        if (value.parentId == null) {
          arr.push(value);
        }
      });
      this.orgState.tableListTree = this.getTreeData(arr);
    },

    //修改和新增
    upDateOrCreate() {
      if (this.orgState.dialogType != "新增机构") {
        this.api
          .put("api/organization/update", this.orgState.dialogForm)
          .then((res) => {
            this.getListTree();
            this.orgState.dialogShow = false;
          });
      } else {
        console.log(this.orgState.dialogForm);
        this.api
          .post("api/organization/create", this.orgState.dialogForm)
          .then((res) => {
            this.getListTree();
            this.orgState.dialogShow = false;
          });
      }
    },
    //删除
    deleteEvent({ data }) {
      console.log(data);
      this.$store.dispatch("ROOT_CONFIRM", {
        that: this,
        msg: "此操作将删除记录, 是否继续?",
        cb: () => {
          this.api
            .delete(`api/organization/delete?id=${data.id}`)
            .then((res) => {
              if (res.status == 200) {
                this.getListTree();
                this.$message.success(res.msg);
              }
            });
        },
      });
    },
    //获取结构树
    async getListTree() {
      try {
        let listTree = await this.api.get("/api/organization/listTree");
        // this.orgState.tableListTree = listTree.data;
        // Object.values(listTree.data).forEach((value)=>{
        this.tds(listTree.data);
        // console.log( 'this.orgState.tableListTree')

        // })
      } catch (error) {
        console.log(error);
      }
    },
    //查询id打开修改弹窗
    upDate(id) {
      this.api.get(`/api/organization/get?id=${id}`).then((res) => {
        res.data.type = `${res.data.type}`;
        this.orgState.dialogForm = res.data;
        this.orgState.dialogType = "修改机构";
        this.orgState.dialogShow = true;
      });
    },
    tableListTree(val) {},
  },
  created() {
    this.getListTree();
  },
};
</script>
<style lang="scss" scoped>
</style>
