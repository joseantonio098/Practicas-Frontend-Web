<template>
    <div class="cont-art-blog">
        <h2>{{fecha}}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
        elit. Animi dicta quibusdam modi est perferendis corrupti nam debitis
        quia fuga! Quidem maiores nobis cumque consequatur a velit beatae repellendus
        unde reprehenderit.</p>
        <img :src="rutaImg" alt="">
    </div>
</template>

<script>
export default {
    props:{
        fecha:{
            type: Number,
            default: 2021
        },
        rutaImg: String,
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
    p{
        width: 500px;
        margin: auto;
    }
    h2{
        background: black;
        color: white;
        padding: 6px 0px;
    }
</style>