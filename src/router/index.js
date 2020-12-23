import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index/Index";
import News from "@/views/news/News";
import NewsInfo from "@/views/newsinfo/NewsInfo";
import ShareImg from "@/views/index/shareImg/shareImg.vue";
import Blank from "@/views/blank/blank";
import ImgInfo from "@/views/index/shareImg/IMGINFOMATION";
import WaterFall from "@/views/waterfall/WaterFall";
import Shopping from "@/views/index/shopping/shopping"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    // component: Index
    redirect: "/index"
  },
  {
    path: "/index",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Index
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/newsinfo",
    name: "NewsInfo",
    component: NewsInfo
  },
  {
    path: "/shareImg",
    name: "ShareImg",
    component: ShareImg
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank
  },
  {
    path: "/imginfo",
    name: "ImgInfo",
    component: ImgInfo
  },
  {
    path: "/waterFall",
    name: "WaterFall",
    component: WaterFall
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: Shopping
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
