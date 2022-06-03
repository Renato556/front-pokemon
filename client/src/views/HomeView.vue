<template>
  <div class="home">
    <img alt="Pokemon logo" src="../assets/logo.png" height="120px">
    <HelloWorld msg="Pokedex VueJS"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
