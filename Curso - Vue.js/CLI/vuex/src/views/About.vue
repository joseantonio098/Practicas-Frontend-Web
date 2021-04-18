<template>
  <div class="about">
    <!-- Acceder al estado(contador) FORMA_1 -->
    <h2 :style="pintarContador">Mi contador: {{contador}}</h2>

    <!-- Acceder al estado(contador) FORMA_2 -->
    <p>{{$store.state.saludar}} - {{nombre}}</p>

    <button @click="aumentarContador">Contador ++</button>
    <btnDisminuir />
  </div>
</template>

<script>
import btnDisminuir from '../components/btnDisminuir';
import {mapState,mapMutations,mapActions} from 'vuex';

export default {
  components: {
    btnDisminuir,
  },
  data() {
    return {
      nombre: 'José Valencia',
    }
  },
  /* Los estados ---> propiedades computadas */
  computed: {
    ...mapState(['contador']), /* Spread Operator */
    pintarContador(){
      return this.contador > 100 ? {'color':'green'} : {'color':'red'};
    }
  },
  /* Las mutaciones/acciones ---> métodos */
  methods: {
    ...mapMutations(['aumentarContador']), /* No Recomendable */
  },

}
</script>

<style>

</style>
