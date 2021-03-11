<template>
  <div>
    <div class="cart">
      <div class="addList">
        <div class="filler"></div>
          <ul>
            <li v-for="(good,index) in addlist" :key="index">

              <van-checkbox v-model="radio[index]"></van-checkbox>

              <div class="goodSimg"><img :src="good.index_src" alt=""></div>

              <div class="pricebox">
                <div class="GoodTitle">{{good.title}}</div>
                <div class="priceline">
                  <div class="p">￥{{good.new_price}}</div>
                   <div class="parnum">
                    <span :readonly="is1" @click="rdc($event, index, good.id)">-</span>
                    <span>{{ goodNum[index] }}</span>
                    <span @click="add(good.id)">+</span>
                  </div>
                  <a @click="delgood($event, index, good.id)" href="">删除</a>
                </div>
              </div>
            </li>
          </ul>
        <div class="filler"></div>
      </div>
      <div class="sum">
        <div class="sumtext">
          <div class="sumup">总计(不含运费)</div>
          <div class="suminfo">已勾选商品<span>{{sum}}</span>件，总计 <span>￥{{sumup}}</span></div>
        </div>
        <div class="commit">
          <div class="commitbutton">去结算</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Qs from "qs";
export default {
  name: "ShoppingCart",
  watch: {
    radio: function(newval) {
      console.log(newval)
    }
  },
  data() {
    return {
      is1: false,
      num: 2,
      radio:[],
      addlist: [],
      arr: [],
      goodNum: []
    };
  },
  computed: {
    
    sum: function() {
      let a = 0;
      this.goodNum.forEach((ele, index) =>{
        if (this.radio[index]) {
          a += parseInt(ele);
        }
      })
      return a;
    },
    sumup: function() {
      let a = 0;
      this.goodNum.forEach((ele, index) =>{
        if (this.radio[index]) {
          a += ele * this.addlist[index].new_price;
        }
      })
      return a = a.toFixed(2);
    }
  },
  created() {
    var sessionKeys = Object.keys(sessionStorage)
    for (var i = 0; i < sessionKeys.length; i++) {
      //可以对key 进行分析从而决定是否要删除sessionStorage 里的缓存
      console.log(sessionStorage.getItem(sessionKeys[i]))
      if (sessionKeys[i] != "isLogin") {
        let obj = Qs.parse(sessionStorage.getItem(sessionKeys[i]))
        console.log(obj.id);
        this.getGoodsData(obj.id);
        this.goodNum.push(obj.n);
        //状态管理检查（如果页面刷新，状态管理会被初始化）
        if (this.$store.state.addcart.findIndex(item => item.id == obj.id) == -1){
          this.$store.commit("add", obj);
        }
      }
  //console.log(this.addlist, this.goodNum)
    }
  },
  methods: {
    delgood(e, index, id){
      e.preventDefault();
      this.addlist.splice(index, 1);
      this.$store.state.addcart.splice(index, 1);
      sessionStorage.removeItem(`idarr${id}`);
      this.goodNum.splice(index, 1);
    /*  sessionStorage.clear();
      sessionStorage.setItem("isLogin", true) */
    },
    add(index, id) {
      let a = this.goodNum[index];
      a++;
      console.log(a);
      console.log(id);
      this.goodNum.splice(index, 1, a); //更新到本地数组
      let obj = { id: id, n: a };
      this.$store.commit("repush", obj); //更新到状态管理
      //console.log(this.$store.state.addcart)
      let qsobj = Qs.stringify(obj);
      sessionStorage.setItem(`idarr${id}`, qsobj); //更新到本地数据储存 
    },
    rdc(index, id) {
      console.log(this.goodNum)
      let b = this.goodNum[index];
      b--;
      b = b >= 1 ? b : 1;
      this.goodNum.splice(index, 1, b); //更新到本地数组

      let obj = { id: id, n: b };
      this.$store.commit("repush", obj); //更新到状态管理
      let qsobj = Qs.stringify(obj);
      sessionStorage.setItem(`idarr${id}`, qsobj); //更新到本地数据储存
    },
    getGoodsData(id) {
      this.$http
        .get("/api/index.php", {
          params: {
            type: "cart",
            ids: id
          }
        })
        .then(res => {
          console.log(res);
          this.addlist.push(res.data[0]);
        });
    }
  }
}
</script>
<style lang="less">
  .cart{
    width: 100%;
    background-color: #dddddd;
    overflow: hidden;
    .addList{
      border-radius: 63px;
      width: 95%;
      margin: 10px auto ;
      background-color: #fff;
      box-shadow: 0px 1px 3px 1px #bcbbbb;
      .filler{
        width: 100%;
        height: 20px;
        background-color: #fff;
      }
      li{
        width: 95%;
        height: 90px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #ccc;
        .goodSimg{
          width: 50px;
          height: 70px;
          margin: 10px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .pricebox{
          width: 250px;
          height: 70px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .GoodTitle{
            text-align: left;
            font-size: 12px;
          }
          .priceline{
            width: 200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .p{
            color:#000;
            font-size: 14px;
          }
          .parnum {
          color: rgb(104, 104, 104);
          font-size: 14px;
          text-align: left;
          span{
            text-align: center;
            display: inline-block;
            width: 25px;
            height: 25px;
            font-size: 16px;
            line-height: 25px;
            background-color: rgb(172, 172, 172);
            border: 1px solid #ccc;
            margin: 0;
          }
        }
        }
      }
    }
    .sum{
      border-radius: 3px;
      width: 95%;
      height: 70px;
      margin: 10px auto ;
      background-color: #fff;
      box-shadow: 0px 1px 3px 1px #bcbbbb;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .sumtext{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 200px;
        height: 50px;
        color:rgb(122, 122, 122);
        font-size: 14px;
        .suminfo{
          span{
            color: rgb(211, 39, 39);
          }
        }
      }
      .commit{
        height: 100%;
        margin-right: 10px;
        display: flex;align-items: center;
        .commitbutton{
          width: 70px;
          height: 40px;
          background-color: rgb(211, 39, 39);
          border-radius: 3px;
          color: #fff;
          display: flex;justify-content: center;align-items: center;
        }
      }
    }
  }
</style>
