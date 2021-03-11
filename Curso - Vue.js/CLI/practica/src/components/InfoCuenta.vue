<template>
    <div class="">
        <h4>Información de la cuenta en {{pais}} - {{moneda}}</h4>
        <button @click="mensaje">Click aquí {{moneda}}</button>
    </div>
</template>

<script>
export default {
    props: {
        moneda: String,
    },
    data() {
        return {
            pais : 'Perú',
        }
    },
    methods: {
        mensaje() {
            alert(`tu moneda está en ${this.moneda}`)
        }
    },
}
</script>

<style scoped>
    button{
        background-color: peru;
        padding: 5px 2px;
        cursor: pointer;
    }
</style>