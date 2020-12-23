<template>
  <div class="goodsList" @scroll="scrollLoad">
    <van-loading v-if="listLoaded" type="spinner" color="#1989fa" size="24px"
      >加载中...</van-loading
    >
    <ul v-else id="imgbox">
      <li class="imgBox" v-for="(good, index) in imgsArr" :key="index">
        <div class="goodImg"><img :src="good.index_src" alt=" " /></div>
        <div class="goodTitle">{{ good.title }}</div>
        <div class="goodprice">
          <div class="newprice">￥{{ good.new_price }}</div>
          <div class="oldprice">￥{{ good.old_price }}</div>
        </div>
        <div class="good-info">
          <div class="good-property">{{ good.property }}</div>
          <div class="good-kc">仅剩{{ good.kc }}件</div>
        </div>
      </li>
    </ul>
    <van-loading v-show="addLoaded" color="#1989fa" size="24px"
      >加载中...</van-loading
    >
  </div>
</template>
<script>
export default {
  name: "WaterFull",
  data() {
    return {
      page: 1,
      list: [],
      listLoaded: false,
      addLoaded: false,
      imgsArr: [],
      wid: 356
    };
  },
  created() {
    this.getGoodsData(this.page);
  },
  mounted() {},
  methods: {
    scrollLoad() {
      let scrollHeight =
        document.getElementsByClassName("goodsList")[0].scrollHeight ||
        document.body.scrollHeight; //正文高度
      let screenH =
        document.getElementsByClassName("goodsList")[0].clientHeight ||
        document.body.clientHeight; //可视区高度
      let wheight =
        document.getElementsByClassName("goodsList")[0].scrollTop ||
        document.body.scrollTop; //卷去高度
      //console.log(scrollHeight,screenH,wheight)
      if (screenH >= scrollHeight - wheight - 50) {
        this.addLoaded = true;
        setTimeout(() => {
          this.addLoaded = false;
          this.page++;
          this.getGoodsData(this.page); //加载列表的请求方法
        }, 1000);
      }
    },
    getGoodsData(page) {
      this.$http
        .get("/api/index.php", {
          params: {
            type: "goodslist",
            page: page
          }
        })
        .then(res => {
          this.imgsArr.push(...res.data.data);
          console.log(this.imgsArr);
        });
    }
  }
};
</script>
<style lang="less">
.goodsList {
  width: 95%;
  height: 540px;
  overflow: scroll;
  margin: 0 auto;
  .imgBox {
    width: calc(100% / 3 - 20rpx);
    box-sizing: border-box;
    /*  break-inside: avoid; */
    padding: 5px;
    border: 1px solid #ccc;
    .goodImg {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .goodTitle {
      width: 100%;
      margin-left: 5px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }
    .goodprice {
      width: 100%;
      display: flex;
      color: rgb(92, 92, 92);
      .newprice {
        color: rgb(245, 44, 44);
        font-size: 15px;
        font-weight: bold;
        margin-right: 8px;
      }
      .oldprice {
        font-size: 13px;
        text-decoration: line-through;
      }
    }
    .good-info {
      width: 100%;
      display: flex;
      font-size: 12px;
      justify-content: space-between;
    }
  }
}
</style>
