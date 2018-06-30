<template>
  <div>
    <hp-header/>      
      <div class="fullscreen-video-wrap">
        <video src="~/assets/Love-Coding.mp4" autoplay="true" loop="true" style="max-width: max-content !important"></video>
      </div>
      <div class="header-overlay">
      </div>
    <hp-footer/>  
    <nuxt/>
    
  </div>
</template>

<script>
import HpHeader from '~/components/Header.vue'
import HpFooter from '~/components/Footer.vue'
export default {
  components: {HpHeader,HpFooter}
}
</script>


<style scoped>

@import "~assets/scss/background.scss";
@import "~assets/scss/main.scss";
</style>
