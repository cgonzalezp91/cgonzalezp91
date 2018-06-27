<template>
  <div>
    <hp-header/>
    <!-- <div class="container"> -->
   
      <div class="fullscreen-video-wrap">
        <video src="~/assets/Love-Coding.mp4" autoplay="true" loop="true"></video>
      </div>
      <div class="header-overlay">
      </div>
     <!-- </div> -->
    <nuxt/>
  </div>
</template>

<script>
import HpHeader from '~/components/Header.vue'
export default {
  components: {HpHeader}
}
</script>


<style scoped>
@import "~assets/scss/background.scss";
@import "~assets/scss/main.scss";
video{
  max-width: max-content !important;
}
</style>
