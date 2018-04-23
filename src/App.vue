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
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    
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
<style>
.slide-fade-enter-active{
  transition: all .3s ease;
}
.slide-fade-leave-active{
  transition: all .3s cubic-bezier(1, 0.5, 0.8, 1)
}
.slide-fade-enter, .slide-fade-leave-active{
  transform: translateX(-430px);
  opacity: 0;
}
</style>