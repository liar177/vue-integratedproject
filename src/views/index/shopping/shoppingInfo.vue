<template>
  <div id="goodinfo">
     <van-loading v-if="listLoaded" type="spinner" color="#1989fa" size="24px"
      >加载中...</van-loading
    >
    <div class="goodswiper">
      <van-swipe :indicator-color="C" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="parchase">
      <div class="goodTitle"><span>{{ good.title }}</span></div>
      <div class="parinfo">
        <div class="parprice">
          <span> 市场价:<i>￥{{ good.old_price }}</i>&nbsp;&nbsp;&nbsp;&nbsp; </span>
          <span> 销售价: <i> ￥{{ good.new_price }} </i> </span>
        </div>
        <div class="parnum">
          购买数量：
          <span @click="dec">-</span>
          <span>{{ num }}</span>
          <span @click="add">+</span>
        </div>
        <div class="buyorwait">
          <div class="buynow">立即购买</div>
          <div @click="add2cart(good.id)" class="add2car">加入购物车</div>
        </div>
      </div>
    </div>
    <div class="gooddetails">
      <van-tabs color="rgb(9, 85, 185)" v-model="active">
        <van-tab title="商品详情">
          <div class="details">{{ good.summary }}</div>
        </van-tab>
        <van-tab title="商品参数">
          <div class="goodparams">
            <span>商品编号：{{ good.sn }}</span>
            <span>库存数量：{{ good.kc }}</span>
            <span>上架时间：{{ good.add_time | realTime }}</span>
          </div>
        </van-tab>
        <van-tab title="评论">
          <div class="goodcomment">
            <div class="gc-title">发表评论</div>
            <textarea name="" id="" cols="40" rows="6"></textarea>
            <div class="gc-send">发表评论</div>
          </div>
          <van-loading color="#1989fa" size="24px">加载中...</van-loading>
        </van-tab>
      </van-tabs>
    </div>
     <van-loading ref="pl" v-show="addLoaded" color="#1989fa" size="24px"
      >加载中...</van-loading
    >
  </div>
</template>
<script>
import Qs from "qs";
export default {
  name: "shoppingInfo",
  data() {
    return {
      id: this.$route.query.id,
      listLoaded: false,
      addLoaded: true,
      good:{},
      aaa:{b:{c:1}},
      images: [],
      C: "#fff",
      num: 1,
      active:0,
      addtime:0,
      addsort:0
    }
  },
  created() {
    this.listLoaded = true;
    this.addLoaded = false;
    this.getGoodsData(this.id);
  },
  computed: {},
  methods: {
    add() {
      this.num++;
    },
    dec() {
      this.num--;
      this.num = this.num >= 0 ? this.num : 0;
    },
    add2cart(goodid) {
      let obj = { id: goodid, n: this.num };
      let qsobj = Qs.stringify(obj);
      if (!sessionStorage.getItem(`idarr${goodid}`)) { //首次点击加入购物车
        sessionStorage.setItem(`idarr${goodid}`, qsobj); // 本地存入选购商品种类数组
        console.log(sessionStorage.getItem(`idarr${goodid}`))
        this.$store.commit("add", obj);
      }
      else { //
      this.$store.commit("repeat", obj);
      let reverse = Qs.parse(sessionStorage.getItem(`idarr${goodid}`))// 将上次的数据从字符串转回对象
      let new_num=parseInt(reverse.n)+this.num;
      obj.n=new_num;
      qsobj = Qs.stringify(obj);
      sessionStorage.setItem(`idarr${goodid}`, qsobj); // 本地存入选购商品种类数组
      }
    },
    getGoodsData(id) {
      this.$http
        .get("/api/index.php", {
          params: {
            type: "goodsinfo",
            gid: id
          }
        })
        .then(res => {
          this.listLoaded = false;
          console.log(res);
          this.good = res.data.info;
          this.images.push(...res.data.slider);
        });
    }
  },
  filters: {
    realTime: val => {
      val = parseInt(val * 1000);
      let time = val;
      time = new Date(time);
      time = time.toLocaleDateString();
      val = new Date(val);
      val = val.toLocaleTimeString();
      var dayTime = val.substring(0, 2) // 当前time类型 ，上午和下午
      val = val.substring(2) // 当前时间（只保留后面时间戳）
      if (dayTime === '下午') {
        var timeList = val.split(':'); // 转化为数组
        timeList[0] = Number(timeList[0]) + 12 // 第0个数组为当前小时数， + 12
        val = timeList.toString().replace(/,/g, ':') // 转化为标准时间格式 00:00:00
      }
      time = time.replace(/\//g, "-");
      val = " " + val;
      val = time.concat(val);
      return val;
    }
  }
}
</script>
<style lang="less">
#goodinfo {
  width: 100%;
  height: 540px;
  background-color: rgb(245, 245, 245);
  overflow-x: hidden;
  overflow-y: scroll;
  .goodswiper {
    width: 95%;
    border: 1px solid  rgb(209, 209, 209);
    box-shadow: 0px 2px 3px 0px rgb(148, 148, 148);
    margin: 10px auto;
    background-color: #fff;
  }
  .parchase{
    width: 95%;
    border: 1px solid  rgb(209, 209, 209);
    box-shadow: 0px 2px 3px 0px rgb(148, 148, 148);
    margin: 10px auto;
    background-color: #fff;
    .goodTitle{
      width: 100%;
      height: 50px;
      color: #000;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
      position: relative;
      span{
        width: 100%;
        position: absolute;
        left: 44%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .parinfo {
        width: 100%;
        .parprice {
          width: 100%;
          text-align: left;
          margin-left: 22px;
          margin-top: 20px;
          span:first-child {
            color: rgb(104, 104, 104);
            font-size: 14px;
            margin-right: 10px;
            i{
              text-decoration: line-through;
            }
          }
          span:last-child {
            color: rgb(104, 104, 104);
            font-size: 14px;
          i{
            color: rgb(240, 14, 59);
            font-weight: bold;
            font-size: 15px;
          }
          }
        }
        .parnum {
          color: rgb(104, 104, 104);
          font-size: 14px;
          text-align: left;
          margin-left: 22px;
          margin-top: 15px;
        span{
            text-align: center;
            display: inline-block;
            width: 20px;
            height: 20px;
            font-size: 16px;
            line-height: 22px;
            background-color: rgb(172, 172, 172);
            border: 1px solid #ccc;
            margin: 0;
          }
        }
        .buyorwait {
          margin-top: 10px;
          margin-left: 22px;
          display: flex;
          div{
            width: 100px;
            height: 40px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
          }
          .buynow{
            background-color: rgb(12, 112, 226);
            margin-right: 5px;
          }
          .add2car{
            background-color: rgb(223, 37, 37);
          }
        }
      }
  }
  .gooddetails {
    width: 95%;
    
    border: 1px solid  rgb(209, 209, 209);
    box-shadow: 0px 2px 3px 0px rgb(148, 148, 148);
    margin: 10px auto;
    background-color: #fff;
    .details{
      display: flex; justify-content: center; align-items: center;
      margin: 10px;
      font-size: 14px;
      text-align: left;
      color: rgb(105, 105, 105);
    }
    .goodparams{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span{
        color: rgb(105, 105, 105);
        text-align: left;
        margin-left: 15px;
        margin-top: 10px;
      }
      span:first-child{
        margin-top: 30px;
      }
    }
    .goodcomment{
      .gc-title{
        width: 90%;
        margin: 0 auto;
        height: 30px;
        font-size: 16px;
        color: #000;
        font-weight: bold;
        display: flex;
        text-align: left;
        justify-content: left;
        align-items: center;
        border-bottom: 1px solid  rgb(105, 105, 105);
        margin-bottom: 5px;
      }
      .gc-send{
        width: 90%;
        margin: 0 auto;
        height: 40px;
        display: flex;justify-content: center;align-items: center;
        color: #fff;
        font-size: 16px;
        background-color: rgb(7, 91, 170);
      }
    }
      }
}
</style>
