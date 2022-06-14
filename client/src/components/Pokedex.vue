<template>
  <div class="pokemon-list">
    <v-row v-for="col of rows" :key="col" class="pokemon-row">
      <div v-for="pokemon in col" :key="pokemon.id" class="box">
        <img class="image" :src="pokemon.image" alt="">
        <figcaption class="pokemon-name">{{ pokemon.name }}</figcaption>
      </div>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PokemonListComponent",
  data() {
    return {
      pokemonList: {},
      rows: [],
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
          this.groupColumns(this.pokemonList)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    groupColumns(pokemonList) {
      for (let i = 0; i < pokemonList.length; i += 3){
        this.rows.push(pokemonList.slice(i, i + 3))
      }
    }
  },
}
</script>

<style>
  body{
    background: orange;
  }
  .pokemon-list{
    margin: auto;
    display: table;
  }
  .pokemon-row{
    display: table-row
  }
  .image{
    width: 13em;
  }
  .box{
    height: 20em;
    width: 20em;
    background-color: white;
    margin: 0.5em;
    cursor: pointer;
    border-radius: 0.5rem;
    filter: drop-shadow(0 0 0.5rem);
    display: inline-block;
  }
  .pokemon-name{
    color: black;
    font-size: 2.5em;
  }
</style>