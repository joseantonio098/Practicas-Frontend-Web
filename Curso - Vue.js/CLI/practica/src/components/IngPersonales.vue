<template>
    <div class="cont-ing-personales">
        <!-- Definimos la acción del evento  Forma1-->
        <button @click="this.$emit('accion')">{{texto}}</button>

        <!-- Definimos la acción del evento  Forma2-->
        <button @click="ejecAccion" :disabled="habilitar">{{texto}}</button>

    </div>
</template>

<script>
    export default {
        props: {
            texto : String,
            habilitar: { 
                type: Boolean,
                default: false,
            }
        },
        methods: {
            ejecAccion(){
                this.$emit('accion')
            }
        }
    }
</script>

<style>
    button{
        padding: 8px 5px;
        margin-bottom: 2px;
    }
</style>