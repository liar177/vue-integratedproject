<template>
  <div class="imginfo" @scroll="scrollLoad">
    <div class="ImgTitle">
      <h3>{{ info.title }}</h3>
    </div>
    <div class="timeInfo">
      <div class="addTime">发表时间:{{ info.add_time | realTime }}</div>
      <div class="views">浏览次数:{{ info.views }}</div>
    </div>
    <div class="content">
      <div class="simg">
        <img @click='prevImg' :src="info.src" :alt="info.title" />
        <img @click='prevImg' :src="info.src" :alt="info.title" />
        <img @click='prevImg' :src="info.src" :alt="info.title" />
      </div>
      <div class="desc">{{ info.desc }}</div>
    </div>
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
    <van-loading v-show="loaded" color="#1989fa" size="24px"
      >加载中...</van-loading
    >
  </div>
</template>
<script>
import { ImagePreview } from 'vant';

export default {
  name: "ImgInfo",
   components: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
  data() {
    return {
      id: this.$route.query.id,
      info: {},
      newcom: "",
      comment: [],
      page: 1,
      loaded: false
    };
  },
  created() {
    console.log(this.id);
    this.getImgInfo(this.id);
    this.getCommentData(this.id, this.page);
  },
  methods: {
    prevImg(){
      ImagePreview({
        images: [
          this.info.src
        ],
      closeable: true,
});
    },
    scrollLoad() {
      let scrollHeight =
        document.getElementsByClassName("imginfo")[0].scrollHeight ||
        document.body.scrollHeight; //正文高度
      let screenH =
        document.getElementsByClassName("imginfo")[0].clientHeight ||
        document.body.clientHeight; //可视区高度
      let wheight =
        document.getElementsByClassName("imginfo")[0].scrollTop ||
        document.body.scrollTop; //卷去高度
      if (screenH >= scrollHeight - wheight) {
        this.loaded = true;
        setTimeout(() => {
          this.loaded = false;
          this.page++;
          this.getCommentData(this.id, this.page); //加载列表的请求方法
        }, 1000);
      }
    },
    getImgInfo(id) {
      this.$http
        .get("/api/index.php", {
          params: {
            type: "imginfo",
            id: id
          }
        })
        .then(res => {
          console.log(res);
          this.info = res.data;
        });
    },
    sendcomment() {
      var time = new Date().getTime();
      var obj = { content: this.newcom, add_time: time, user: "aa" };
      this.comment.unshift(obj);
    },
    getCommentData(id, page) {
      this.$http
        .get("/api/index.php", {
          params: {
            type: "imgcomment",
            id: id,
            page: page
          }
        })
        .then(res => {
          console.log(res.data);
          this.comment.push(...res.data.data);
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
};
</script>
<style lang="less" scoped>
/* 加载插件Loading */
.van-loading {
  height: 40px;
  color: #1989fa;
  text-align: center !important;
}
* {
  margin: 0;
  padding: 0;
}
.imginfo {
  width: 95%;
  margin: 0 auto;
  height: 540px;
  overflow: scroll;
}
h3 {
  color: #000;
  text-align: left;
}
.com {
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #ccc;
}
.timeInfo {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(11, 157, 177);
  border-bottom: 1px solid #ccc;
}
.simg {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  img {
    width: 100px;
    height: 100px;
  }
}
.desc {
  text-align: left !important;
}
/* 评论 */
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
</style>
