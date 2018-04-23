<template>
  <ul>
    <li><router-link to="/">首页</router-link></li>
    <li><router-link to="/Category">分类</router-link></li>
    <li><router-link to="/Cart">购物车</router-link></li>
    <li><router-link to="/Me">我的</router-link></li>    
  </ul>
</template>
<style lang="scss" scoped>
.footer{
    flex:0 0 1rem;
    width: 100%;
}
ul{
    display:flex;
    background:linear-gradient(rgba(#eee,0.9),rgba(#eee,0.3)) ;
}
li{
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1 1 0%;
}

</style>
