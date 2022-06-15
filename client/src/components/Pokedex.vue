<template>
  <div class="pokemon-list">
    <div v-for="col of rows" :key="col.id" class="pokemon-row">
      <div v-for="pokemon in col" :key="pokemon.id" class="box" @click="initializeModal(pokemon.id)">
        <img class="pokemon-image" :src="pokemon.image" alt="Pokemon image">
        <figcaption class="pokemon-name">{{ pokemon.name }}</figcaption>
      </div>
    </div>
    <PokemonModal v-show="showModal" @close-modal="showModal=false" :pokemon="pokemonData"/>
  </div>
</template>

<script>
import axios from "axios"
import PokemonModal from './PokemonModal.vue'

export default {
    name: "PokemonListComponent",
    data() {
        return {
            pokemonList: {},
            rows: [],
            showModal: false,
            pokemonData: {}
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
                this.pokemonList = res.data
                this.groupColumns(this.pokemonList)
            })
                .catch((error) => {
                console.log(error)
            });
        },
        groupColumns(pokemonList) {
            for (let i = 0; i < pokemonList.length; i += 3) {
                this.rows.push(pokemonList.slice(i, i + 3))
            }
        },
        initializeModal(pokemonId) {
            axios
                .get("http://localhost:8082/api/pokemon/" + pokemonId)
                .then((res) => {
                this.pokemonData = res.data
                this.showModal = true
            })
                .catch((error) => {
                console.log(error)
            })
        }
    },
    components: { PokemonModal }
}
</script>