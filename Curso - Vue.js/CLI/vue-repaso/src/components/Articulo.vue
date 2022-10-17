<template>
      <img src="../assets/blog.png" alt="Blog">
      <h2>Imagen principal de nuestro {{title}}</h2>
</template>

<script>
export default {
    name: 'Blog',
    props: {
        title: String,
    }
}
</script>

<style scoped>
    img{
        vertical-align: top;
        border: 5px solid rgb(61, 61, 61);
        border-radius: 20px;
    }
</style>