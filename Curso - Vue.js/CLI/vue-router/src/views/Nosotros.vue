<template>
    <div class="nosotros">
        <h1>Sobre Nosotros</h1>
        <ArtBlog fecha="2022" :rutaImg="enlaceImg"/>
    </div>
</template>

<script>
import ArtBlog from '../components/ArtBlog'

export default {
    components:{
        ArtBlog,
    },
    data(){
        return{
            enlaceImg: 'https://storage.googleapis.com/camaracomercio/assets/img/imgHV/emp-nikos.png'
        }
    }

}
</script>

<style>

</style>