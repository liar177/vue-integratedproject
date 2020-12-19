<template>
  <div class="tb">
    <van-tabbar v-model="active">
      <van-tabbar-item to="/">
        <van-icon
          badge="3"
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
      <van-tabbar-item>
        <van-icon
          badge="5"
          class="iconfont"
          class-prefix="icon"
          name="qicheqianlian-"
        />
        <span>购物车</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <van-icon class="iconfont" class-prefix="icon" name="pubuliu" />
        <span>瀑布流</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <van-icon class="iconfont" class-prefix="icon" name="Icon-huiyuan" />
        <span>会员</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  created(){
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
