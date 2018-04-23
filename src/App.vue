<template>
  <div>
    <h2>App</h2>
    <div class="nav">
      <router-link to="/">home</router-link>
      <router-link :to="{name:'about'}">About</router-link>
      <router-link to="/user">user</router-link>
      <router-link to="/user/30">user 30</router-link>
      <router-link :to="{ name: 'user', params: { userid: 123 }}">user 123</router-link>
    </div>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>

export default{
  mounted(){
    // this.$router.push('user/30')
    // setTimeout(()=>{
    //   this.$router.push('about'),
    //   setTimeout(()=>{
    //     this.$router.push('user')
    //   },3000)
    // },3000)
  }
}
</script>
