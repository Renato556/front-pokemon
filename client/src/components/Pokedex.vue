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
import PokemonModal from './PokemonModal.vue'
import pokemonApi from '../gateways/pokemon.api'

export default {
    name: "PokedexComponent",
    data() {
        return {
            pokemonList: {},
            rows: [],
            showModal: false,
            pokemonData: {}
        }
    },
    created() {
        this.getPokemonList()
    },
    methods: {
        async getPokemonList() {
            this.pokemonList = (await pokemonApi.getPokemonList()).data
            this.groupColumns(this.pokemonList)
        },
        groupColumns(pokemonList) {
            const POKEMONS_PER_ROW = 3
            
            for (let i = 0; i < pokemonList.length; i += POKEMONS_PER_ROW) {
                this.rows.push(pokemonList.slice(i, i + POKEMONS_PER_ROW))
            }
        },
        async initializeModal(pokemonId) {
            this.pokemonData = (await pokemonApi.getOnePokemon(pokemonId)).data
            this.showModal = true
        }
    },
    components: { PokemonModal }
}
</script>