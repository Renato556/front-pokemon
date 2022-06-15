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
import axios from "axios"
import PokemonModal from './PokemonModal.vue'

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
        getPokemon() {
            let idOrName = this.$route.query.search
            axios
                .get("http://localhost:8082/api/pokemon/" + idOrName)
                .then((res) => {
                this.pokemon = res.data
            })
                .catch((error) => {
                console.log(error.response.data)
            });
        }
    },
    components: { PokemonModal }
}
</script>