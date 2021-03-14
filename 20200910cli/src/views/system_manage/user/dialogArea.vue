<template>
  <div class="listTemplateDialog">
    <el-dialog
      :title="this.userState.dialogType == 'update'?'修改用户':'新增用户'"
      :visible.sync="userState.dialogShow"
      :close-on-click-modal="false"
      width="800px"
      height="500px"
      @open="_open"
      @close="_close"
      right>
      <el-form ref="form" :rules="rules.USER_ROLE" :model="userState.dialogData" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="所属机构" prop="orgId">
              <el-cascader 
                v-model="userState.dialogData.orgId"
                :props="{ emitPath: false, checkStrictly: true, value: 'id' }"
                :options="orgList" 
                :show-all-levels="false">
              </el-cascader>
            </el-form-item>
            <el-form-item label="用户名称" prop="name">
              <el-input v-model.trim="userState.dialogData.name" placeholder="请输入用户名称"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="mobile">
              <el-input v-model.trim="userState.dialogData.mobile" placeholder="请输入联系方式"></el-input>
            </el-form-item>
            <el-form-item label="用户密码" prop="password" v-if="!userState.dialogData">
              <el-input v-model.trim="userState.dialogData.password" placeholder="请输入用户密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="comment" v-if="userState.dialogData">
              <el-input v-model.trim="userState.dialogData.passwordNew" placeholder="请输入新密码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="角色列表" prop="roleList">              
              <el-select v-model="userState.dialogData.roleList" multiple placeholder="请选择">
                <el-option
                  v-for="item in [{label: '角色1',value: 1},{label: '角色2',value: 2}]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="登录账户" prop="account">
              <el-input v-model.trim="userState.dialogData.account" placeholder="请输入登录账户"></el-input>
            </el-form-item>
            <el-form-item label="用户邮箱" prop="comment">
              <el-input v-model.trim="userState.dialogData.email" placeholder="请输入用户邮箱"></el-input>
            </el-form-item>
            <el-form-item label="用户地址" prop="address">
              <el-input v-model.trim="userState.dialogData.address" placeholder="请输入用户地址"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="dialogOperator">
        <el-button type="primary" size="small" @click="$emit('addOrUpdateEvent')" :disabled="userState.dialogBottomShake">保存</el-button>
        <el-button type="primary" size="small" @click="userState.dialogShow = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState({ userState: state=>state.User })
  },
  data(){
    return {
      orgList: [],
    }     
  },
  methods: {
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
       this.orgList = this.getTreeData(arr);
    },
    _open(){  
      this.userState.dialogReset = false;
      this.getOrgTree();
    },
    _close(){ this.$refs["form"].resetFields(); },
    //获取列表
    // getOrgTree(){
    //   this.api.get("/api/organization/listTree").then((res)=>{
    //     if(res.status == 200){
    //       this.orgList = res.data;
    //       console.log(this.orgList)
    //     }
    //   })
    // },
    //获取机构列表
    async getOrgTree(){
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
    
    inputFouce(){ this.userState.dialogShowIcon = true }
  }  
}
</script>
<style lang="scss" scoped>
#app .listTemplateContainer .listTemplateDialog .el-autocomplete{
  width: 69% !important;
  .el-input{
    width: 100% !important;
  }
}
</style>
