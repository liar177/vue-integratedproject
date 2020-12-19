<template>
  <div class="index">
    <!-- 轮播图 -->
    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 主页面宫格 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item to="/news">
        <img width="60px" height="60px" src="@/assets/icon01.jpg" />
        <span>新闻资讯</span>
      </van-grid-item>

      <van-grid-item>
        <img width="60px" height="60px" src="@/assets/icon02.jpg" />
        <span>图片分享</span>
      </van-grid-item>

      <van-grid-item>
        <img width="60px" height="60px" src="@/assets/icon03.jpg" />
        <span>商品购买</span>
      </van-grid-item>

      <van-grid-item>
        <img width="60px" height="60px" src="@/assets/icon04.jpg" />
        <span>留言反馈</span>
      </van-grid-item>

      <van-grid-item>
        <img width="60px" height="60px" src="@/assets/icon05.jpg" />
        <span>视频专区</span>
      </van-grid-item>

      <van-grid-item>
        <img width="60px" height="60px" src="@/assets/icon06.jpg" />
        <span>联系我们</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      images: []
    };
  },
  created() {
    this.$http
      .get('/api/index.php', {
        params: {
          type: "slider"
        }
      })
      .then(res => {
        console.log(res);
        this.images = res.data;
      });
 
  },
  methods: {}
};
</script>
<style lang="less">
.van-swipe {
  width: 100%;
  height: 150px;
  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
}
.van-grid {
  margin-top: 20px;
  span {
    margin-top: 10px;
  }
}
</style>
