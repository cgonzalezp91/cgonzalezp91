<template>
    <div id="hpheader">
        <section class="hero is-paddingless is-absolute">
        <!-- Hero header: will stick at the top -->
        <div class="hero-head">
            <nav class="navbar">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                <!-- <img src="http://bulma.io/images/bulma-logo.png" alt="Logo"> -->
                <span class="icon">
                   <i class="mdi mdi-biohazard"> </i>
                </span>
                &nbsp; cgonzalezp91
                </a>
                
                <div class="navbar-burger" @click="$store.state.showNav = !$store.state.showNav" :class="{ 'is-active': $store.state.showNav }">
                <span></span>
                <span></span>
                </div>
                
            </div>
            
            <div class="navbar-menu is-transparent" :class="{ 'is-active': $store.state.showNav }">
                <div class="navbar-end">
                <a class="navbar-item" href="/about">
                    About
                </a>
                <a class="navbar-item" href="/blog">
                    Blog
                </a>
                </div>
                
            </div>
            
            </nav>
        </div>
        </section>
        <div class="movedown" v-if="$store.state.showNav">
        </div>
    </div>
</template>

<script>
export default {
    name: "hpheader",
    data (){
        return{
            // showNav: false
        }
    }
}
</script>


<style lang="scss" scoped>
body{
    color: aliceblue;
}
.is-absolute{
    position: absolute;
}
.is-transparent{
    background-color: transparent;
}
a:hover{
    color: crimson;
}
.navbar-item:hover{
    background-color: transparent !important;
}
@media(max-width: 670px){
    .navbar-item{
        font-size: 20px;
    }
}
.movedown{
    padding-bottom: 100px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
