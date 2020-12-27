<template>
  <div class="shoppingPage">
    <van-loading v-if="listLoaded" type="spinner" color="#1989fa" size="24px"
      >加载中...</van-loading
    >
    <ul v-else id="sbox" @scroll="scrollLoad">
      <li class="shoppingBox" v-for="(good, index) in list" :key="index" @click="tobuy(good.id)">
        <div class="sgoodImg"><img :src="good.index_src" alt=""></div>
        <div class="sgoodTitle">{{ good.title }}</div>
        <div class="sprice">
          <div class="s-newprice">￥{{ good.new_price }}</div>
          <div class="s-oldprice">￥{{ good.old_price }}</div>
        </div>
        <div class="sgood-info">
          <div class="sgood-property">{{ good.property }}</div>
          <div class="sgood-kc">仅剩{{ good.kc }}件</div>
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
  name: "Shopping",
  data(){
    return{
      page: 1,
      list: [],
      listLoaded: false,
      addLoaded: false
    }
  },
  created() {
    this.getGoodsData(this.page);
    this.listLoaded=true
    console.log(this.list)
  },
  methods:{
    tobuy(id) {
      this.$router.push({ path: "/shoppingInfo", query: { id: id } });
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
          this.listLoaded=false
          console.log(res.data.data); //res.data.data才能得到具体数据
          this.list.push(...res.data.data);
        });
    },
    scrollLoad() {
      let scrollHeight =
        document.getElementById("sbox").scrollHeight ||
        document.body.scrollHeight; //正文高度
      let screenH =
        document.getElementById("sbox").clientHeight ||
        document.body.clientHeight; //可视区高度
      let wheight =
        document.getElementById("sbox").scrollTop || document.body.scrollTop; //卷去高度

      if (screenH >= scrollHeight - wheight) {
        this.addLoaded = true;
        setTimeout(() => {
          this.addLoaded = false;
          this.page++;
          this.getGoodsData(this.page); //加载列表的请求方法
        }, 1000);
      }
    }
  }
};
</script>
<style lang="less">
.shoppingPage {
  width: 98%;
  margin: 0 auto;
  ul{
    width: 100%;
    height: 540px;
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .shoppingBox {
    margin-top: 5px;
    width: 48%;height: 288px;
    border: 1px solid #ccc;
    color:#000;
    .sgoodImg{
      width: 100%;
      height: 220px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .sgoodTitle{
      width: 100%;
      margin-left: 5px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sprice{
      width: 100%;
      display: flex;
      color:rgb(92, 92, 92);
      .s-newprice{
        color:rgb(245, 44, 44);
        font-size: 15px;
        font-weight: bold;
        margin-right: 8px;
      }
      .s-oldprice{
        font-size: 13px;
        text-decoration: line-through;
      }
    }
    .sgood-info{
      width: 100%;
      display: flex;
      font-size: 12px;
      justify-content: space-between;
      div{
        margin-left: 5px;
        margin-right: 5px;
      }
      }
    }
  }
</style>
