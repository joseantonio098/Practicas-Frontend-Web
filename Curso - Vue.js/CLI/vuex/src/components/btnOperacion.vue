<template>
    <!-- Pasar más de 2 parámetros (X OBJETOS) -->
    <button @click="accionPotContador({exp: numExponente, dif: numDiferencia})">
        Elevar al {{numExponente}} - {{numDiferencia}}
    </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            numExponente : 2,
            numDiferencia : 100,
        }
    },
    methods: {
        ...mapActions(['accionPotContador'])
    },
}
</script>

<style>

</style>