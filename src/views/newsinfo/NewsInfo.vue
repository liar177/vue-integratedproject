<template>
  <div class="newsinfo" @scroll="scrollLoad">
    <van-loading  v-if='pageloaded' color="#1989fa" size="24px"
      >加载中...</van-loading
    >
    <div v-else class="newsinfoBox">
      <div class="header">
        <div class="title">{{ news.tilte }}</div>
        <div class="news-info">
          <div class="data-date">发表时间:{{ news.add_time | realTime }}</div>
          <div class="click-times">浏览次数:{{ news.click }}</div>
        </div>
      </div>
      <div v-html='newsinfoContent' id="newsinfoContent" class="content"></div>
      <div class="comment">
        <div class="comsTitle">发表评论</div>
        <textarea
          name="addcomment"
          v-model="newcom"
          id=""
          cols="48"
          rows="10"
        ></textarea>
        <div @click="sendcomment" class="sendcomment">
          <span>发表评论</span>
        </div>
        <ul>
          <li v-for="(com, index) in comment" :key="index">
            <div class="userinfo">
              <span> {{ index }}楼</span>
              <span>用户：匿名用户</span>
              <span>发表时间:{{ com.add_time | realTime }}</span>
            </div>
            <div class="usercom">
              {{ com.content }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <van-loading v-show="loaded" color="#1989fa" size="24px"
      >加载中...</van-loading
    >
  </div>
</template>
<script>
import Qs from 'qs';
export default {
  name: "NewsInfo",
  data() {
    return {
      nid: null,
      news: {},
      comment: [],
      loaded: false,
      pageloaded:true,
      page: 1,
      newcom: "",
      newsinfoContent:null
    };
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
  },
  created() {
    var id = this.$route.query.id;
    //console.log(this.$route.query)
    this.pageloaded=true;
    this.getNewsData(id);
    this.getCommentData(id, this.page);
  },
  methods: {
    sendcomment() {//添加评论到后端储存，后端要求数据格式为form-data 要用qs 的stringify()进行转换
      var time = new Date().getTime();
      var obj = { content: this.newcom, add_time: time, user: "aa" };
      this.comment.unshift(obj);
      var qsobj=Qs.stringify( {
        type:'addnewscomment',
        nid: this.news.id,
        comment:this.newcom
      })
      this.$http.post('/api/index.php',qsobj)
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getNewsData(id) {
      this.$http
        .get("/api/index.php", {
          params: {
            type: "newsinfo",
            id: id
          }
        })
        .then(res => {
          //console.log(res.data.data); //res.data.data才能得到具体数据
          this.pageloaded=false;
          this.news = res.data.data;
          this.newsinfoContent= this.news.info;
        });
    },
    getCommentData(id, page) {
      this.$http
        .get("/api/index.php", {
          params: {
            type: "newscomment",
            id: id,
            page: page
          }
        })
        .then(res => {
          var coms = res.data;
          //console.log(coms.data);
          this.comment.push(...coms.data);
        });
    },
    scrollLoad() {
      let scrollHeight =
        document.getElementsByClassName("newsinfo")[0].scrollHeight ||
        document.body.scrollHeight; //正文高度
      let screenH =
        document.getElementsByClassName("newsinfo")[0].clientHeight ||
        document.body.clientHeight; //可视区高度
      let wheight =
        document.getElementsByClassName("newsinfo")[0].scrollTop ||
        document.body.scrollTop; //卷去高度
      if (screenH >= scrollHeight - wheight) {
        this.loaded = true;
        setTimeout(() => {
          this.loaded = false;
          this.page++;
          this.getCommentData(this.news.nid, this.page); //加载列表的请求方法
        }, 1000);
      }
    }
  }
};
</script>
<style lang="less">
/* 加载插件Loading */
.van-loading {
  height: 40px;
  color: #1989fa;
  text-align: center !important;
}
h2 {
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
}
.newsinfo {
  width: 95%;
  margin: 0 auto;
  height: 540px;
  overflow: scroll;
  text-align: left;
  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    border-bottom: 1px solid #ccc;
    .title {
      font-size: 18px;
      font-weight: bold;
      text-align: left;
    }
    .news-info {
      margin-top: 5px;
      display: flex;
      color: rgb(7, 117, 221);
      .click-times {
        font-size: 12px;
        margin-left: 15px;
      }
    }
  }
  .comsTitle {
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
  .sendcomment {
    width: 100%;
    height: 50px;
    font-size: 18px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(20, 144, 216);
    margin-bottom: 5px;
  }
  .userinfo {
    height: 20px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(207, 206, 206);
  }
  .usercom {
    height: 30px;
    display: flex;
    align-items: center;
  }
}
</style>
