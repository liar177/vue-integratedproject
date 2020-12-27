<template>
  <div>
    <div id="loginBox">
      <div class="logo">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="input">
        <van-cell-group>
          <van-field v-model=" username " label="用户名" placeholder="请输入用户名" />
          <van-field v-model=" password " placeholder="请输入您的密码" type="password" label="密码" />
        </van-cell-group>
      </div>
      <div class="login" @click="gettoken">登录</div>
    </div>
  </div>
</template>
<script>
//import Qs from 'qs';
export default {
  name: "Login",
  data(){
    return {
      username: "",
      password: "",
      token: "",
      
    }
  },
  methods:{
    gettoken(){
      var obj = { username: this.username, userpass : this.password };
      console.log(this.username, this.password)
      this.$store.state.username = this.username;
      //var qsobj = Qs.stringify(obj);
      this.$http.post("/api/login.php", obj ).then ( res =>{
        this.token = res.data.token;
        console.log(res);
        var that = this;
        if(res.data.token){ // 登陆成功
          this.$toast.success({message:res.data.msg,duration:"800"})
          setTimeout(function(){
            localStorage.setItem("token", res.data.token);
            sessionStorage.setItem("isLogin", true);
            // this.$store.commit("isLogin")
            that.$store.state.isLogin = true;
            that.$router.push({ path:that.$store.state.to, params: { userToken: this.token } }).catch((res)=>{console.log(res)})
          }, 1000);
        }//请求失败在axios拦截请求中设置了
      })
    }
  }
}
</script>
<style lang="less">
#loginBox {
  width: 100%;
  .logo{
    margin: 0 auto;
    width: 200px;
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .login{
    color: #fff;
    font-size: 16px;
    width: 100%;
    height: 30px;
    background-color: rgb(9, 230, 20);
  }
}
</style>
