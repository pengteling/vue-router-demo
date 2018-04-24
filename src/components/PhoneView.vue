<template>
  <div>
    {{ this.$route.params }}
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
  },
  beforeRouteUpdate: (to,from,next) =>{
    console.log("beforeRouteUpdate")
    next()
  }
}
</script>
