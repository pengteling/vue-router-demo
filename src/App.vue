<template>
  <div class="container">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>

export default{
  
}
</script>
<style lang="scss" scoped>
.container{
  height:100vh;
  display:flex;
  flex-direction: column;
}
.main{
  flex:1 1 0%
}
a{
  text-decoration: none
}
</style>
