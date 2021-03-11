<template>
  <center><img alt="Vue logo" src="./assets/logo.png"></center>
  <HelloWorld msg="Bienvenido a Vue!!"/>
  <Titulo texto="José Valencia"/>
  <Cuenta />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Titulo from './components/Titulo'
import Cuenta from './components/Cuenta'


export default {
  name: 'App',
  components: {
    HelloWorld, Titulo, Cuenta
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
