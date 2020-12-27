import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import { VueMasonryPlugin } from "vue-masonry";
import Qs from 'qs';
import "@/lib/font/iconfont.css";

import "vant/lib/index.css";
import {
  NavBar,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Image as VanImage,
  Tabbar,
  TabbarItem,
  Icon,
  Loading,
  Tab,
  Tabs,
  ImagePreview,
  Field,
  Cell,
  CellGroup,
  Toast,
  Checkbox,
  CheckboxGroup,
  SubmitBar 
} from "vant";
Vue.use(NavBar)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Grid)
  .use(GridItem)
  .use(VanImage)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Loading)
  .use(Tab)
  .use(Tabs)
  .use(ImagePreview)
  .use(VueMasonryPlugin)
  .use(Field)
  .use(Cell)
  .use(CellGroup)
  .use(Toast)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(SubmitBar);

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

//拦截请求
Axios.interceptors.request.use(
  config => {
  // 在请求头中添加token
  // 服务器端在server变量中接收，用于关键操作的判断
  config.headers.TOKEN = localStorage.getItem("token");
  // 将提交的数据转化为formdata形式
  // 不需要在每次请求的时候都使用qs模块处理
  config.data = Qs.stringify(config.data);
  // 注意 处理完成后需要将结果return回去
  //console.log(config);
  return config
  },
  error => {
  return Promise.reject(error)
  }
  )

// 拦截响应
Axios.interceptors.response.use(res => {
  // 1为后端返回的token无效的状态码，0为post请求成功
  if (res.data.code == 1 && res.data.msg != "商品id错误" && res.data.msg != "该分类下无图片") {
  // 保存当前路由地址，以便登录后再跳转到该页面
  //store.state.to =  window.location.pathname  ;
  console.log(res);
  //清空token
  localStorage.removeItem("token")
  // 清空isLogin登录状态
  // 该状态是存储在sessionStorage，页面关闭即自动清除
  sessionStorage.removeItem("isLogin");
  Toast.fail({ message: res.data.msg, duration: "800" });
  if( window.location.pathname !="/login"){
    router.push({ path: "/login" });
  }
  }
  //注意 处理完成后需要将结果return回去
  return res;
  })

  import Router from 'vue-router'
  const routerPush = Router.prototype.push
  Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
  }


router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
    //判断当前路由是否需要验证登录
    if (to.meta["islogin"]) {
      if (!localStorage.getItem("token") || !store.state.isLogin) { 
         // 保存请求的路由，以便登录成功后还能跳转回去
         Toast({message:"请先登录哦！" ,duration:"800"})
        store.state.to = to.path
    //没有token值或者登录状态为false
    // 跳转登录
    next({ path: "/login" });
    return;
    }
  }
 /*    if(to.path == "/login"){
      next({ path: "/index" })
      return ;
    } */
    //其余情况下，路由正常跳转
    next()
    });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
