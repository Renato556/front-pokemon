<template>
  <div class="home">
    <a href="/pokedex"><img alt="Pokemon logo" src="../assets/logo.png" height="120px"></a>
    <h1>Pokedex VueJS</h1>
    <SearchBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'PokedexView',
  components: {
    SearchBar
}
}
</script>

<style>
h1{
  font-size: 3em;
}
.logo {
  cursor: pointer;
}
body{
  background: #f3992c;
}
.pokemon{
  margin: auto;
  display: table;
}
.pokemon-image{
  width: 13em;
}
.box{
  height: 20em;
  width: 20em;
  background-color: white;
  margin: 0.5em;
  cursor: pointer;
  border-radius: 0.5rem;
  filter: drop-shadow(0 0.5em 0.5rem rgba(0,0,0,0.5));
  display: inline-block;
}
.pokemon-name{
  color: black;
  text-transform: capitalize;
  font-size: 2em;
}
</style>
