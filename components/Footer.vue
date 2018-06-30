<template>
    <!-- <div> -->
        <div class="divfooter">            
                <h1>Copyright © 2018</h1>
                <span class="icon is-medium twitter">
                    <a target="_blank" href="https://www.twitter.com/cgonzalezp91">
                        <i class="mdi mdi-24px mdi-twitter-circle"></i>
                    </a>
                </span>
                <span class="icon is-medium twitter">
                    <a target="_blank" href="https://www.github.com/cgonzalezp91">
                        <i class="mdi mdi-24px mdi-github-circle"></i>
                    </a>
                </span>
                <span class="icon is-medium twitter">
                    <a target="_blank" href="https://www.linkedin.com/in/cgonzalezp91/">
                        <i class="mdi mdi-24px mdi-linkedin-box"></i>
                    </a>
                </span>
                
        </div>
    <!-- </div> -->
</template>

<script>
export default {

}
</script>

<style scoped>
h1{
    font-size: 15px;
    grid-column-start: 2;
    justify-self: end;
    align-self: center;
}
.is-absolute{
    position: absolute;
}
.is-transparent{
    background-color: transparent;
}
.twitter{
    justify-self: center;
    margin: 5px;
}
.twitter:hover{
    background-color: red;
    
}
.divfooter{
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: grid;
    grid-template-columns: 30% 1.5fr repeat(4, .8fr) 30%;
    grid-template-rows: 1fr;
    flex-direction: row;
    justify-content: space-between;
    z-index: 2;
}
</style>
