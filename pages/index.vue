<template>
  <div class="v-header container">
       <!-- class="v-header container" -->
        <div class="header-content">
            <figure class="image is-128x128">
                <img src="~/assets/CHARLY.jpg">
            </figure>
            <h1>Carlos Gonzalez</h1>
            <p>
                Full Stack Web Developer, Passionated about JavaScript! <br>
                <a href="mailto:cgonzalezp91@gmail.com">Hire me! 💪</a>
            </p>
            <!-- <a class="btn" href="#">Read More</a> -->
        </div>
        
    </div>
     <!-- <div class="fullscreen-video-wrap">
            <video src="~/assets/Love-Coding.mp4" autoplay="true" loop="true"></video>
        </div> -->
        <!-- <div class="header-overlay">
        </div> -->
</template>


<style lang="scss" scoped>
// @import "~assets/scss/main.scss";
.image{
    align-self: center;
}
.header-content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.image{
    margin-bottom: 2rem;
}
@media (max-width: 500px) {
    .image.is-128x128{
        width: 90px;
        height: 90px;
    }
}
@media (min-width: 1000px) {
    .image.is-128x128{
        width: 200px;
        height: 200px;
    }
    .image{
        margin-bottom: 3rem;
    }
}
</style>
