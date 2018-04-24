<template>
  <div>
    <h3>
      Me
    </h3>
    <p>
      
      <router-link to="/mpointsmall">会员中心</router-link>
    </p>
  </div>
</template>
<script>
export default {
  beforeRouteEnter: (to, from, next) => {
    // ...
    console.log("beforeRouteEnter")
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    // ...
    console.log("beforeRouteLeave")
    next()
  }
}
</script>

