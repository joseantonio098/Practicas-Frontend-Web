<template>
  <div class="cont-img">
      <img :src="rutaIMG" alt="">
      <p>Imagen de Prueba VUE!! {{fecha}}</p>
  </div>
</template>

<script>
    export default {
        props: {
            fecha: String,
        },
        data(){
            return{
                rutaIMG: 'https://storage.googleapis.com/camaracomercio/assets/img/fondoEnrollment.png',
            }
        }
    }
</script>

<style scoped>
    .cont-img{
        width: 500px;
        margin: 10px auto;
    }
    .cont-img img{
        width: 100%;
    }
    p{
        background-color: rgb(7, 143, 120);
        padding: 8px 0px;
        color: #ffffff;
        box-shadow: 0px 0px 4px 1px rgb(42, 42, 42);
    }
</style>