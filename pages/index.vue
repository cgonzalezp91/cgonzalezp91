<template>
  <header class="v-header container">
        <div class="fullscreen-video-wrap">
            <video src="~/assets/Love-Coding.mp4" autoplay="true" loop="true"></video>
        </div>
        <div class="header-overlay">

        </div>
        <div class="header-content">
            <h1>Carlos Gonzalez</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt perferendis ex! Delectus blanditiis cum incidunt fugiat dolore error obcaecati!
            </p>
            <a class="btn" href="#">Read More</a>
        </div>
        
    </header>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
*{
    box-sizing: border-box;
}
body{
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
    overflow-x: hidden;
}
.v-header{
    height: 100vh;
    display: flex;
    align-items: center;
    color: #ffffff;
}
.container{
  max-width: 960px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  text-align: center;
  position: unset;
}
.fullscreen-video-wrap{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.fullscreen-video-wrap video{
  min-width: 100%;
  min-height: 100%;
  max-width: max-content;
  /* max-height: 100%; */
}
.header-overlay{
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  z-index: 1;
  opacity: 0.5;

}
.header-content{
  z-index:2;
}
.header-content h1{
  font-size: 50px;
  margin-bottom: 0;
}
.header-content p{
  font-size: 1.5rem;
  display: block;
  padding-bottom: 2rem;
}
.btn{
  background: #34b3a0;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  text-decoration: none;
}
@media(max-width:960px){
  .container{
    padding-right: 3rem;
    padding-left: 3rem;
  }
}
/* .container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

/* .title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
} */

/* .subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
