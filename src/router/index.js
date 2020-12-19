import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index/Index";
import News from "@/views/news/News";
import NewsInfo from "@/views/newsinfo/NewsInfo"
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: News
  },
  {
    path: "/newsinfo",
    name: "NewsInfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NewsInfo
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
