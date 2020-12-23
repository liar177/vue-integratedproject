<template>
  <div>
     <van-loading v-show="listLoaded" type="spinner" color="#1989fa" size="24px"
      >加载中...</van-loading
    >
    <div class="sort">
      <!-- <ul>
        <li>全部</li>
        <li class="imgsort" v-for="(imgSort,index) in sort" :key='index'><span>{{imgSort.title}}</span></li>
      </ul> -->
      <van-tabs v-model="active">
        <van-tab title="全部"> </van-tab>
        <van-tab
          v-for="(imgSort, index) in sort"
          :key="index"
          :title="imgSort.title"
        >
        </van-tab>
      </van-tabs>
    </div>
    <ul class="imgbox">
      <!--  <router-link to=""> -->
      <li
        @click="getimginfo(img.id)"
        class="imgli"
        v-for="(img, sy) in imgs"
        :key="sy"
      >
        <img width="100%" height="200px" :src="img.src" alt="" />
        <div class="shade"></div>
        <div class="shade-text">{{ imgs[sy].desc }}</div>
      </li>
      <!-- </router-link> -->
    </ul>
  </div>
</template>
<script>
import vue from "vue";
import { Toast } from "vant";
vue.use(Toast);
export default {
  name: "ShareImg",
  data() {
    return {
      sort: [],
      imgs: [],
      active: null,
      listLoaded:false,
      imgsLoaded:false
    };
  },
  created() {
    this.getSortData();
    this.active = 0; //为了触发侦听事件
    this.listLoaded=true;
    this.imgsLoaded=true;
  },
  watch: {
    active: function(newval) {
      console.log(newval);
      this.getSortImg(newval);
    }
  },
  methods: {
    getimginfo(id) {
      this.$router.push({ path: "/imginfo", query: { id: id } });
    },
    getSortData() {
      this.$http
        .get("/api/index.php", {
          params: {
            type: "imgscate"
          }
        })
        .then(res => {
          //console.log(res)
          this.listLoaded=false;//横向列表加载完毕
          this.sort.push(...res.data);
          console.log(this.sort);
        });
    },
    getSortImg(id) {
      this.$http
        .get("/api/index.php", {
          params: {
            type: "img",
            cateid: id
          }
        })
        .then(res => {
          console.log(res);
          this.imgsLoaded=false;
          this.imgs = [];
          if (res.data instanceof Array) {
            this.imgs.push(...res.data);
          } else {
           /*  Toast.fail("此分类下没有图片");
            Toast.setDefaultOptions({ duration: 500 }); */
            Toast.fail({
              message:"此分类下没有图片",
              duration:5000,
              overlay:true,
              closeOnClickOverlay:true
            })
          }

          //console.log(res.data.data); //res.data.data才能得到具体数据
          /*  this.sort.push(...res.data);
          console.log(this.sort); */
        });
    }
  }
};
</script>
<style lang="less">
.van-overlay{
  
}
.imgbox {
  width: 375px;
  height: 540px;
  overflow-y: scroll;
}
.imgli {
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
  .shade {
    display: block;
   
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.6;
  }
  .shade-text{
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0;
    bottom: 0;
    text-align: left;
    font-size: 12px;
    font-weight: bold;
    color: #fff;

    display: -webkit-box;
    text-align: left;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
