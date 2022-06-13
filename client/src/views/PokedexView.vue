<template>
  <div class="home">
    <img alt="Pokemon logo" src="../assets/logo.png" height="120px">
    <h1>Pokedex VueJS</h1>
    <Pokedex/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokedex from '@/components/Pokedex.vue'

export default {
  name: 'PokedexView',
  components: {
    Pokedex
  }
}
</script>

<style>
h1{
  font-size: 3em;
}
</style>
