<template>
    <div class="cont-articulo">
        <h3>Artículo Parámetro: {{$route.params.id}}</h3>
        <ArtBlog fecha="2030" :rutaImg="enlaceImg"/>
        <div class="articulo">
            <h3 class="title">{{articulo.id}} - {{articulo.title}}</h3>
            <p class="art-parrafo">{{articulo.body}}</p>
        </div>
    </div>
</template>

<script>
import ArtBlog from '../components/ArtBlog'

export default {
    components: {
        ArtBlog,
    },
    data(){
        return{
            enlaceImg: 'https://storage.googleapis.com/camaracomercio/assets/img/imgHV/emp-alicorp.png',
            articulo: {}
        }   
    },
    methods: {
        //Consumiendo Fetch API 
        async consumirArticulo(){
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
                this.articulo = await data.json();
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.consumirArticulo();
    }
}
</script>

<style scoped>
    .art-parrafo{
        width: 450px;
        padding: 8px 10px;
        border: 2px solid black;
        margin: auto;
    }
    .title{
        background: rgb(16, 48, 109);
        color: white;
        padding: 8px 0px;
    }
</style>