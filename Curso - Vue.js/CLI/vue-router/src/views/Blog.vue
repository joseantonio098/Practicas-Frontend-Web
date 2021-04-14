<template>
    <div class="cont-blog">
        <h1>Blog de VUE!!</h1>
        <ArtBlog fecha="2025" :rutaImg="enlaceImg"/>

        <button @click="consumirApi">Consumir API</button>
        <div class="articulo" id="articulo" v-for="item in arrayBlog" :key="item.id">

            <router-link :to="`/blog/${item.id}`"> <!-- Rutas x cada artículo -->
                <h3 class="title">{{item.id}}- {{item.title}}</h3>
            </router-link>
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
            enlaceImg: 'https://storage.googleapis.com/camaracomercio/assets/img/imgHV/emp-dataSoft.png',
            arrayBlog: []
        }
    },
    methods: {
        //Consumiendo Fetch API 
        async consumirApi(){
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts');
                const array = await data.json();
                
                /*----------------- Forma 1 */
                /* array.forEach(e => {
                    document.querySelector('#articulo').innerHTML += `
                    <h2 class="title">${e.id}- ${e.title}</h2>
                    <p>${e.body}</p>
                    `
                }); */

                /*----------------- Forma 2 */
                this.arrayBlog = array;

            } catch (error) {
                console.log(error);
            }
        }
    },
    created() { /* Ciclo de vida - Se ejecutará antes del Template */
        this.consumirApi();
    }
}
</script>

<style>
    button{
        padding: 6px 10px;
        background: rgb(141, 9, 9);
        color: white;
        cursor: pointer;
    }
    .articulo{
        width: 700px;
        margin: 5px auto;
    }
</style>