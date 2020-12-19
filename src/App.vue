<template>
  <div id="app">
    <van-nav-bar
      title="VUE项目"
      :left-text="ltxt"
      :left-arrow="ishome"
      @click-left="onClickLeft"
    />
    <router-view />
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/Tabbar";
export default {
  components: {
    TabBar
  },
  data() {
    return {
      ishome: true,
      ltxt: "返回"
    };
  },
  methods: {
    onClickLeft() {
      console.log("a");
      history.go(-1);
    }
  },
  created(){
    //console.log(this.$route)
    if(this.$route.path=="/"||this.$route.path=="/index"){
       this.ishome = false;
          this.ltxt = "";

    }
  },
  watch: {
    "$route.path": function(newval) {
      console.log(newval);
      switch (newval) {
        case "/":
          this.ishome = false;
          this.ltxt = "";
          break;
        case "/index":
          this.ishome = false;
          this.ltxt = "";
          break;
        case "/news":
          this.ishome = true;
          this.ltxt = "返回";
          break;
      }
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.van-nav-bar__content {
  background-color: rgb(15, 171, 233);
  .van-nav-bar__title {
    color: #fff !important;
  }
  .van-nav-bar__text {
    color: #fff !important;
  }
  .van-icon-arrow-left {
    color: #fff !important;
  }
}
</style>
