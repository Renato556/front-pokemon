<template>
  <div class="home">
    <AppView/>
    <Pokemon/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokemon from '@/components/Pokemon.vue'
import AppView from './AppView.vue'

export default {
  name: 'PokedexView',
  components: {
    Pokemon,
    AppView
  },
  data() {
    return {
      showModal: false,
    }
  }
}
</script>