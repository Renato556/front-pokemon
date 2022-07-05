<template>
  <div class="home">
    <AppView/>
    <Pokedex/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokedex from '@/components/Pokedex.vue'
import AppView from './AppView.vue'

export default {
  name: 'PokedexView',
  components: {
    Pokedex,
    AppView
  }
}
</script>