<template>
   <div class="pokemon">
     <div class="image">
       <img :src="pokemon.image" />
     </div>
     <div class="name">
       {{ pokemon.name }}
     </div>
   </div>
  </template>
  <script>
  import axios from "axios";

  export default {
   name: "PokemonComponent",
   data() {
     return {
       pokemon: {},
     };
   },
   created() {
     this.getPokemon();
   },
   methods: {
     getPokemon() {
       axios
         .get("http://localhost:8082/api/pokemon/5")
         .then((res) => {
           this.pokemon = res.data;
         })
         .catch((error) => {
           console.log(error);
         });
     },
   },
  };
  </script>