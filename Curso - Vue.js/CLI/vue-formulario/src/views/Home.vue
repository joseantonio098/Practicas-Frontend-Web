<template>
  <div class="home">
    <!-- FORMULARIO 'VUE' -->
    <form action="">
        <h5 class="mt-3">Input type TEXT:</h5> <!-- STRING_VUE -->
        <input type="text" v-model="tarea.nombre" class="form-control my-2" placeholder="Ingrese Nombre">

        <h5 class="mt-3">Input type CHECKBOX:</h5> <!-- ARREGLO_VUE -->
        <div class="form-check">
          <input type="checkbox" v-model="tarea.categoria" value="JAVASCRIPT" id="catScript" class="form-check-input">
          <label for="catScript" class="form-check-label">JAVASCRIPT</label>
        </div>
        <div class="form-check">
          <input type="checkbox" v-model="tarea.categoria" value="PHP" id="catPhp" class="form-check-input">
          <label for="catPhp" class="form-check-label">PHP</label>
        </div>

        <h5 class="mt-3">Input type RADIO:</h5> <!-- STRING_VUE -->
        <div class="form-check">
          <input type="radio" v-model="tarea.estado" value="Activo" name="state" id="activo" class="form-check-input">
          <label for="activo" class="form-check-label">Activo</label>
        </div>
        <div class="form-check">
          <input type="radio" v-model="tarea.estado" value="Inactivo" name="state" id="inactivo" class="form-check-input">
          <label for="inactivo" class="form-check-label">Inactivo</label>
        </div>

        <h5 class="mt-3">Input type NUMBER:</h5> <!-- NUMBER_VUE -->
        <input type="number" v-model.number="tarea.numero" class="form-control" placeholder="Ingrese Número">
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
export default {
  name: 'Home',
  components: { 
  },
  data() {
    return {
      tarea: {
        nombre: '',
        categoria: [],
        estado: '',
        numero: 0,
      }
    }
  },
}
</script>
