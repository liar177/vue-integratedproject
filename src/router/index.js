import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index/Index";
import News from "@/views/news/News";
import NewsInfo from "@/views/newsinfo/NewsInfo";
import ShareImg from "@/views/index/shareImg/shareImg.vue";
import Blank from "@/views/blank/blank";
import ImgInfo from "@/views/index/shareImg/IMGINFOMATION";
import WaterFall from "@/views/waterfall/WaterFall";
import Shopping from "@/views/index/shopping/shopping";
import ShoppingInfo from "@/views/index/shopping/shoppingInfo";
import Login from "@/views/login/Login";
import ShoppingCart from "@/views/shoppingcart/shoppingcart";
import PersonalCenter from "@/views/personalcenter/personalcenter"
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
    meta: { islogin: false },
    component: News
  },
  {
    path: "/newsinfo",
    name: "NewsInfo",
    meta: { islogin: false },
    component: NewsInfo
  },
  {
    path: "/shareImg",
    name: "ShareImg",
    meta: { islogin: false },
    component: ShareImg
  },
  {
    path: "/blank",
    name: "Blank",
    meta: { islogin: false },
    component: Blank
  },
  {
    path: "/imginfo",
    name: "ImgInfo",
    meta: { islogin: false },
    component: ImgInfo
  },
  {
    path: "/waterFall",
    name: "WaterFall",
    meta: { islogin: false },
    component: WaterFall
  },
  {
    path: "/shopping",
    name: "Shopping",
    meta: { islogin: true },
    component: Shopping
  },
  {
    path: "/shoppingInfo",
    name: "ShoppingInfo",
    meta: { islogin: false },
    component: ShoppingInfo
  },
  {
    path: "/shoppingCart",
    name: "ShoppingCart",
    meta: { islogin: true },
    component: ShoppingCart
  },
  {
    path: "/personalCenter",
    name: "PersonalCenter",
    meta: { islogin: true },
    component: PersonalCenter
  },
  {
    path: "/login",
    name: "Login",
    meta: { islogin: false },
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
