<template>
  <div class="home">
    <!-- FORMULARIO 'VUE' -->
    <form action="" @submit.prevent="enviarFormulario">
      <Input :tarea="tarea"/>
    </form>
    <ListadoTareas/>
  </div>
</template>

<script>
import Input from '../components/Input';
import ListadoTareas from '../components/ListadoTareas';
import { mapActions } from 'vuex';
const shortid = require('shortid'); // Generador id

export default {
  name: 'Home',
  components: { 
    Input, ListadoTareas
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categoria: [],
        estado: '',
        numero: 0,
      }
    }
  },
  methods: {
    ...mapActions(['setTareas']),
  
    enviarFormulario(){
      this.tarea.id = shortid.generate(); //Generador id
      this.setTareas(this.tarea); //Enviar datos
    
      //Limpiar datos
      this.tarea = {nombre: '',categoria: [],estado: '',numero: 0,}
    },
  },
}
</script>

<style>
 body{
   background-color: rgb(200, 200, 200);
 }
</style>