<template>
  <div class="v-header container">
        <div class="header-content spinner-1">
            <h1>Under Construction 🚧</h1>
        </div>
        
    </div>
</template>


<style lang="scss" scoped>
// @import "~assets/scss/main.scss";
.spinner-1:before{
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 60px;
    width: 60px;
    margin-top: 50px;
    margin-left: -30px;
    border-radius: 50%;
    border: 7px solid transparent;
    border-top-color: coral;
    border-bottom-color:aquamarine;
    animation: spinner 1s linear infinite;
}
@keyframes spinner{
    to {
        transform: rotate(360deg);
    }
}
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
