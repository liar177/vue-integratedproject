<template>
  <div>
    <van-loading v-if="listLoaded" type="spinner" color="#1989fa" size="24px"
      >加载中...</van-loading
    >
    <ul v-else id="box" @scroll="scrollLoad">
      <li class="box" v-for="(one, index) in news" :key="index">
        <div class="img"><img :src="one.index_src" alt="" /></div>
        <div class="news-content">
          <div class="title">
            <router-link :to="{ path: '/newsinfo', query: { id: one.nid } }">{{
              one.tilte
            }}</router-link>
          </div>
          <div class="news-info">
            <div class="data-date">{{ one.add_time | realTime }}</div>
            <div class="click-times">浏览次数{{ one.click }}</div>
          </div>
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
  name: "News",
  data() {
    return {
      news: [],
      page: 1,
      a: 1,
      addLoaded: false,
      listLoaded:false
    };
  },
  watch: {},
  created() {
    this.listLoaded=true;
    this.getData(this.page);
  },
  mounted() {},
   filters: {
    realTime: val => {
      val = parseInt(val * 1000);
      let time = val;
      time = new Date(time);
      time = time.toLocaleDateString();
      console.log(time)
      val = new Date(val);
      val = val.toLocaleTimeString();
      var dayTime = val.substring(0, 2) // 当前time类型 ，上午和下午
      var sUserAgent = navigator.userAgent.toLowerCase();
      console.log(sUserAgent)
      if(/ipad|iphone/.test(sUserAgent)){
        console.log("这是pc端")
        val = val.substring(2) // 当前时间（只保留后面时间戳）
      if (dayTime === '下午') {
        var timeList = val.split(':'); // 转化为数组
        timeList[0] = Number(timeList[0]) + 12 // 第0个数组为当前小时数， + 12
        val = timeList.toString().replace(/,/g, ':') // 转化为标准时间格式 00:00:00
      }
      }
      time = time.replace(/\//g, "-");
      val = " " + val;
      val = time.concat(val);
      return val;
    }
  },
  methods: {
    changA() {
      this.a = 2;
    },
    getData(page) {
      this.$http
        .get("/api/index.php", {
          params: {
            type: "list",
            page: page
          }
        })
        .then(res => {
          this.listLoaded=false;
          //console.log(res.data.data); //res.data.data才能得到具体数据
          this.news.push(...res.data.data);
          console.log(this.news);
        });
    },
    scrollLoad() {
      let scrollHeight =
        document.getElementById("box").scrollHeight ||
        document.body.scrollHeight; //正文高度
      let screenH =
        document.getElementById("box").clientHeight ||
        document.body.clientHeight; //可视区高度
      let wheight =
        document.getElementById("box").scrollTop || document.body.scrollTop; //卷去高度

      if (screenH >= scrollHeight - wheight) {
        this.addLoaded = true;
        setTimeout(() => {
          this.addLoaded = false;
          this.page++;
          this.getData(this.page); //加载列表的请求方法
        }, 1000);
      }
    }
  }
};
</script>

<style lang="less">
#box {
  width: 100%;
  height: 540px;
  overflow: scroll;
}
.box::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  width: 95%;
  background-color: #ccc;
}
.box {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .img {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
  .news-content {
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .title {
      width: 100%;
      font-size: 14px;
      color: #000;
      font-weight: bold;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 5px;
      a {
        color: #000;
        font-size: 16px;
      }
    }
    .news-info {
      width: 100%;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      .click-times {
        margin-right: 10px;
      }
    }
  }
}
/* 加载插件Loading */
.van-loading {
  height: 40px;
  color: #1989fa;
}
</style>
