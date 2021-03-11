<template>
    <div class="titulo">
        <p>Hola soy un titulo / {{texto}}</p>
    </div>
</template>

<script>
export default {
    name: 'Titulo',
    props: {
        texto: String,
    }
}
</script>

<style scoped> /* 'scoped' ejecutar estilos solo para este componente */
    .titulo{
        background-color: dimgray;
        padding: 3px 0px;
        color: white
    }
</style>