import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";

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
  Loading 
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
  .use(Loading);

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

new Vue({
  router,
  store,
  render: h => h(App),
  components: {}
}).$mount("#app");
