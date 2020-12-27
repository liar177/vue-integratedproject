<template>
  <div>
    PersonalCenter.vue
    <h1>username:{{ un }}</h1>
    <button @click="getout">退出登录</button>
  </div>
</template>
<script>
export default {
  name: "PersonalCenter",
  data(){
    return {
      un: ""
    }
  },
  created(){
    this.un = this.$store.state.username;
  },
  methods:{
    getout(){
      localStorage.clear(); 
      sessionStorage.clear();
      window.location.reload()
    }
  }
}
</script>