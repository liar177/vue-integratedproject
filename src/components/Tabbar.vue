<template>
  <div class="tb">
    <van-tabbar :placeholder="true" :fixed="true" v-model="active">
      <van-tabbar-item to="/">
        <van-icon
          class="iconfont"
          class-prefix="icon"
          name="Icon-yemian-copy-copy"
        />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/news">
        <van-icon class="iconfont" class-prefix="icon" name="ico-news" />
        <span>新闻</span>
      </van-tabbar-item>
      <van-tabbar-item to="/shoppingCart">
        <van-icon
          :badge="num"
          class="iconfont"
          class-prefix="icon"
          name="qicheqianlian-"
        />
        <span>购物车</span>
      </van-tabbar-item>
      <van-tabbar-item to="/waterfall">
        <van-icon class="iconfont" class-prefix="icon" name="pubuliu" />
        <span>瀑布流</span>
      </van-tabbar-item>
      <van-tabbar-item to="/personalCenter">
        <van-icon class="iconfont" class-prefix="icon" name="Icon-huiyuan" />
        <span>会员</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
//import Qs from "qs";
export default {
  data() {
    return {
      active: 0
    };
  },
  created() {
    switch (this.$route.path) {
      case "/":
        this.active = 0;
        break;
      case "/index":
        this.active = 0;
        break;
      case "/news":
        this.active = 1;
        break;
      case "/waterfall":
        this.active = 3;
        break;
    }
  },
  name: "Tabbar",
  watch: {
    "$route.path": function(newval) {
      switch (newval) {
        case "/":
          this.active = 0;
          break;
        case "/index":
          this.active = 0;
          break;
        case "/news":
          this.active = 1;
          break;
      }
    },
  },
  computed:{
    /*     sessionStorage: function() {
      let sum = 0;
      let sessionKeys = Object.keys(sessionStorage);
      console.log("a");
      for (var i = 0; i < sessionKeys.length; i++) {
        //可以对key 进行分析从而决定是否要删除sessionStorage 里的缓存
        if (sessionKeys[i] != "isLogin") {
          let obj = Qs.parse(sessionStorage.getItem(sessionKeys[i]));
          sum += parseInt(obj.n);
        }
      }
      this.num = sum;
    } */
    num: function() {
      let sum = 0;
      console.log("a");
      this.$store.state.addcart.forEach(ele => {
        if (ele.n){
          sum = parseInt(ele.n) + parseInt(sum);
          console.log(ele.n)
          console.log(sum)
        }
      });
/*       if (sum == 0) { //由于状态管理在页面刷新之后也会被销毁并重新建立 ，所以购物车页面刷新之后已添加的商品数据也获取不到了
        let sessionKeys = Object.keys(sessionStorage);
        console.log("a");
        for (var i = 0; i < sessionKeys.length; i++) {
        //可以对key 进行分析从而决定是否要删除sessionStorage 里的缓存
          if (sessionKeys[i] != "isLogin") {
            let obj = Qs.parse(sessionStorage.getItem(sessionKeys[i]));
            sum = parseInt(obj.n) + parseInt(sum);
            console.log(obj.n)
          }
        }
      } */
      return sum;
    }
  }
};
</script>
<style lang="less">
.van-tabbar-item__text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    margin-top: 5px;
  }
}
.iconfont {
  position: relative;
}
</style>
