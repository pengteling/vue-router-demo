<template>
  <Mplayer
    url="http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3"
    :autoplay="true"
    :paused="false"
    volume=80    
  />
</template>
<script>
import Mplayer from 'vue-simple-mplayer2'
export default{
  components:{
    Mplayer
  }
}
</script>
