<template>
    <h5 class="mt-3">* Input type TEXT:</h5> <!-- STRING_VUE -->
    <input type="text" v-model.trim="tarea.nombre" class="form-control my-2" placeholder="Ingrese Nombre">

    <h5 class="mt-3">* Input type CHECKBOX:</h5> <!-- ARREGLO_VUE -->
    <div class="form-check">
        <input type="checkbox" v-model="tarea.categoria" value="JAVASCRIPT" id="catScript" class="form-check-input">
        <label for="catScript" class="form-check-label">JAVASCRIPT</label>
    </div>
    <div class="form-check">
        <input type="checkbox" v-model="tarea.categoria" value="PHP" id="catPhp" class="form-check-input">
        <label for="catPhp" class="form-check-label">PHP</label>
    </div>
    <div class="form-check">
        <input type="checkbox" v-model="tarea.categoria" value="CSS" id="catCss" class="form-check-input">
        <label for="catCss" class="form-check-label">CSS</label>
    </div>

    <h5 class="mt-3">* Input type RADIO:</h5> <!-- STRING_VUE -->
    <div class="form-check">
        <input type="radio" v-model="tarea.estado" value="Activo" name="state" id="activo" class="form-check-input">
        <label for="activo" class="form-check-label">Activo</label>
    </div>
    <div class="form-check">
        <input type="radio" v-model="tarea.estado" value="Inactivo" name="state" id="inactivo" class="form-check-input">
        <label for="inactivo" class="form-check-label">Inactivo</label>
    </div>

    <h5 class="mt-3">* Input type NUMBER:</h5> <!-- NUMBER_VUE -->
    <input type="number" v-model.number="tarea.numero" class="form-control" placeholder="Ingrese Número">

    <button type="submit" class="btn btn-dark my-2 w-100" :disabled="validarFormulario">Enviar Datos</button> <!-- BUTTON_SUBMIT -->
</template>

<script>
export default {
    props: {
        tarea: Object,
    },
    computed: {
    /* Deshabilita el botón del formulario */
    validarFormulario(){
      return this.tarea.nombre === '' ? true : false;
    }
  }
}
</script>

<style>

</style>