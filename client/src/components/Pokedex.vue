<template>
  <div class="pokemon-list">
    <div v-for="pokemon in pokemonList" :key="pokemon.id" style="float: left;">
      <div class="box">
        <img class="image" :src="pokemon.image" alt="">
        <figcaption class="pokemon-name">{{ pokemon.name }}</figcaption>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PokemonListComponent",
  data() {
    return {
      pokemonList: {},
    };
  },
  created() {
    this.getPokemonList()
  },
  methods: {
    getPokemonList() {
      axios
        .get("http://localhost:8082/api/pokemon/all")
        .then((res) => {
          this.pokemonList = res.data;
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style>
  body{
    background: orange;
  }
  .pokemon-list{
    width: 40.7%;
    margin-left: auto;
    margin-right: auto;
  }
  .image{
    width: 10em;
  }
  .box{
    height: 15em;
    width: 15em;
    background-color: white;
    margin: 0.5em;
    cursor: pointer;
    border-radius: 0.5rem;
    filter: drop-shadow(0 0 0.5rem)
  }
  .pokemon-name{
    color: black;
    font-size: 2.5em;
  }
</style>