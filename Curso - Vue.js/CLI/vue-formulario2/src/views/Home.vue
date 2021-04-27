<template>
  <div class="home">
    <!-- FORMULARIO 'VUE' -->
    <form action="" @submit.prevent="enviarFormulario">
      <Input :tarea="tarea"/>
    </form>

    <div class="cont-view">
      <h5 class="mt-3">Mostrar Datos:</h5>
      <p><b>Nombre:</b> {{tarea.nombre}}</p>
      <p><b>Categoría:</b> {{tarea.categoria}}</p>
      <p><b>Estado:</b> {{tarea.estado}}</p>
      <p><b>Número:</b> {{tarea.numero}} Tipo: {{typeof(tarea.numero)}}</p>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input';

export default {
  name: 'Home',
  components: { 
    Input,
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
    /* Permite limpiar formulario */
    enviarFormulario(){
      this.tarea = {nombre: '',categoria: [],estado: '',numero: 0,}
    }
  },
}
</script>

<style>
 body{
   background-color: rgb(200, 200, 200);
 }
</style>