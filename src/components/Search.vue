<template >
  <div>
    <!-- {{ this.$route.params }} -->
    <!-- {{ sokey }}
    {{ this.$route.query }} -->
    <!-- {{ props }} -->
    {{ sokey2 }}
    {{ sokey }}
  </div>
</template>
<script>
export default {
  props:['sokey','sokey2'],
  beforeRouteEnter: (to, from, next) => {
    // ...
    console.log("beforeRouteEnter")
    next()
  }
  
}
</script>

