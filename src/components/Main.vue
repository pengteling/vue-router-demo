<template>
  <div>
    <div class="main">
      <router-view></router-view>
    </div>    
  </div>
</template>
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
