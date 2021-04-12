<template>
    <h3>Artículo Parámetro: {{$route.params.id}}</h3>
    <ArtBlog fecha="2030" :rutaImg="enlaceImg"/>
</template>

<script>
import ArtBlog from '../components/ArtBlog'

export default {
    components: {
        ArtBlog,
    },
    data(){
        return{
            enlaceImg: 'https://storage.googleapis.com/camaracomercio/assets/img/imgHV/emp-alicorp.png'
        }
    }
}
</script>

<style>

</style>