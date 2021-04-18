<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template><script>
export default {
  name: "SidebarItem",
  data() {
    return {
      isCollapse: true,
      loading: true
    };
  },
  mounted() {
    let a = `${document.body.clientHeight}`; //document.body.clientWidth;
    this.$store.commit("DOCHEIGHT", a);
     window.onresize = () => {
          let a = `${document.body.clientWidth}`;
      let b = `${document.body.clientHeight}`;
         this.$store.commit("DOCHEIGHT", b);
         this.$store.commit("DOCWIDTH", a);

       }
  }
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
