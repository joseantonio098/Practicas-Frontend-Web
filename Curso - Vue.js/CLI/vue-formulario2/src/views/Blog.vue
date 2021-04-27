<template>
  <div class="cont-blog">
      <h2>BLOG!! {{$route.params.id}}</h2>
      <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';

export default {
    components: {
        HelloWorld
    },
}
</script>

<style scoped>
    
</style>