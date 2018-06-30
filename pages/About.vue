<template>
     <div class="v-header container">
        <div class="header-content">
            <h1>About Me</h1>
            <p>
                I am a Full Stack web developer passionate about learning and writing code. 💪 <br>
                Also i am in love of javascript and all the 🌎 around it.
            </p>
           <h2> Professional Career</h2>
            <p>
                I studied and graduated with a degree in computer systems engineer from the <a target="_blank" href="http://www.itnuevolaredo.edu.mx/">Tecnológico de Nuevo Laredo</a> 
                 <br>Also keep studying in <a target="_blank" href="https://www.platzi.com">Platzi</a> with the following courses and specialization in #javascript
            </p>
            <div style="display: flex; justify-content:space-evenly;">
            <figure class="image is-128x128">
                <img src="~/assets/diplomas/certificadojs.png">
            </figure>
            <figure class="image is-128x128">
                <img src="~/assets/diplomas/Node.png">
            </figure>
            <figure class="image is-128x128">
                <img src="~/assets/diplomas/VuePro.png">
            </figure>
            <figure class="image is-128x128">
                <img src="~/assets/diplomas/vuebasico.png">
            </figure>
            <figure class="image is-128x128">
                <img src="~/assets/diplomas/react-native.png">
            </figure>
            <figure class="image is-128x128">
                <img src="~/assets/diplomas/GitYGitHub.png">
            </figure>
            </div>
            <h2> Personal</h2>
             <p>
                I am a father and husband of a beautiful daughter and wife. 👨‍👩‍👧
            </p>
            
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

.header-content p{
    padding-bottom: 0rem;
}
.container{
    text-align: left;
}

@media (max-width: 800px) {
    .image.is-128x128{
        width: 90px;
        height: 90px;
    }
}
@media (max-width: 570px) {
    .image.is-128x128{
        width: 60px;
        height: 60px;
    }
    .container{
      padding-right: 2.8rem;
      padding-left: 2.8rem;
    }
    .header-content h1{
      font-size: 28px;
    }
    h2{
      font-size: 23px;
    }
    .header-content p {
      font-size: 1.0rem;
    }
}
@media (max-width: 400px) {
    .image.is-128x128{
        width: 40px;
        height: 40px;
    }
    .container{
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .header-content h1{
      font-size: 25px;
    }
    h2{
      font-size: 20px;
    }
    .header-content p {
      font-size: .8rem;
    }
}

</style>
