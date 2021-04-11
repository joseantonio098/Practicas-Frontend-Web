<template>
    <div class="">
        <h4>Información de la cuenta en {{pais}} - {{moneda}} - {{cantidad}}</h4>
        <button @click="mensaje">Click aquí {{moneda}}</button>
        <button @click="aumentar">Aumentar Saldo</button>
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
            cantidad : 100,
        }
    },
    methods: {
        mensaje() {
            alert(`tu moneda está en ${this.moneda}`)
        },
        aumentar(){
            this.cantidad += 100 
        },
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