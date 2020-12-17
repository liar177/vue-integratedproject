import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/lib/font/iconfont.css"


import 'vant/lib/index.css';
import { NavBar, Swipe, SwipeItem , Lazyload , Grid , GridItem , Image as VanImage ,Tabbar, TabbarItem , Icon  } from 'vant';
Vue.use(NavBar)
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .use(Grid)
    .use(GridItem)
    .use(VanImage)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Icon);

Vue.config.productionTip = false;

new Vue({

  router,
  store,
  render: h => h(App),
  components:{
  }
}).$mount("#app");
