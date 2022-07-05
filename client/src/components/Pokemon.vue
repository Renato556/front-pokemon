<template>
  <div class="pokemon">
    <div class="box" @click="showModal = true">
      <img class="pokemon-image" :src="pokemon.image" alt="Pokemon não encontrado">
      <figcaption class="pokemon-name">{{ pokemon.name }}</figcaption>
    </div>
    <PokemonModal v-show="showModal" @close-modal="showModal = false" :pokemon="pokemon"/>
  </div>
</template>

<script>
import PokemonModal from './PokemonModal.vue'
import pokemonApi from '../gateways/pokemon.api'

export default {
  name: "PokemonComponent",
  data() {
    return {
      pokemon: {},
      showModal: false,
    }
  },
  created() {
    this.getPokemon()
  },
  methods: {
    async getPokemon() {
      this.pokemon = (await pokemonApi.getOnePokemon(this.$route.query.search)).data
    }
  },
  components: { PokemonModal }
}
</script>