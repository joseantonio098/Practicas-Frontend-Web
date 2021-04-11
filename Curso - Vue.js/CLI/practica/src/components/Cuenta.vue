<template>
    <div class="contenedor">
        <h3 class="cuenta">Cuenta: {{banco}} </h3>
        <div v-for="(cuenta, indice) in cuentas" :key="indice">
            <li>{{ indice }} - {{ cuenta }}</li>
        </div>
        <a target="_blank" :href="enlace">Click aquí</a>

        <InfoCuenta moneda="Soles"/> <!-- Plantilla hijo -->
        <InfoCuenta moneda="Dólares"/> 
    </div>
</template>

<script>
import InfoCuenta from './InfoCuenta';

export default {
    components: {
        InfoCuenta,
    },
    data() {
        return {
            banco : 'BBVA',
            cuentas : ['c.Sueldo', 'c.Corriente', 'c.Ahorros'],
            enlace : 'https://www.youtube.com/channel/UCeBvCHoZXt6uGMo33BPH7oQ/videos',
        }
    },
    methods: {
    }
}
</script>

<style>

</style>