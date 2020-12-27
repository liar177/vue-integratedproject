import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    to: "/index",
    isLogin: sessionStorage.getItem("isLogin") || false,
    addcart: [],
    username: "",
  },
  mutations: {
    isLogin(state){
      state.isLogin = true;
    },
    add(state, idobj){
      state.addcart.push(idobj);
      //{id:"id",num:"num"} num为点击时此商品的数量
    },
    repeat(state, idobj){
      let index = state.addcart.findIndex(item => item.id == idobj.id);
      console.log(idobj.id)
      console.log(state.addcart)
      state.addcart[index].n += idobj.n;
    },
    repush(state, idobj){
      let index = state.addcart.findIndex(item => item.id == idobj.id);
      console.log(idobj);
      if (index == -1) {
        state.addcart.push(idobj);
      } else {
        let a = idobj;
        state.addcart.splice(index, 1, a)
      }
      console.log(state.addcart)
    }
  },
  actions: {},
  modules: {}
})
