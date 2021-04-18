<template>
  <!-- :class="{hideSidebar:!sidebar.opened}" -->

  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
     router
    @select="handleSelect"
  >
    <el-menu-item index="/table1">工程信息</el-menu-item>
    <el-menu-item index="table2">表二</el-menu-item>
    <el-submenu index="table3">
      <template slot="title">表三</template>
      <el-menu-item index="table3">甲</el-menu-item>
      <el-menu-item index="3-2">乙</el-menu-item>
      <el-menu-item index="3-3">丙</el-menu-item>
    </el-submenu>
    <el-submenu index="table4">
      <template slot="title">表四</template>
      <el-menu-item index="4-1">甲</el-menu-item>
      <el-menu-item index="4-2">乙</el-menu-item>
      <el-menu-item index="4-3">丙</el-menu-item>
    </el-submenu>
    <el-menu-item index="table5">
      <a href="https://www.ele.me" target="_blank">表五</a>
    </el-menu-item>
    <el-menu-item index="6">
      <a href="https://www.ele.me" target="_blank">汇总计算</a>
    </el-menu-item>
    <el-menu-item index="7">
      <a href="https://www.ele.me" target="_blank">打印报表</a>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Navbar2",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },

            
  methods: {
    handleSelect(key, keyPath) {
      console.log(key)
      console.log('dis')
      this.$router.push({ name: 'table', params: { id: key }})
      console.log(this.$route)

    }
  }
};
</script>