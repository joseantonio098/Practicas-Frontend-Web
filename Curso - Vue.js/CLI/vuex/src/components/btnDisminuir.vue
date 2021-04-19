<template>
    <button @click="accionDismContador(10)">Contador --</button> 
</template>

<script>
import {mapActions} from 'vuex';

export default {
    methods: {
        ...mapActions(['accionDismContador'])
    },
}
</script>

<style>

</style>