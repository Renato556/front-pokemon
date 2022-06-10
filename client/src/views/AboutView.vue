<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
  import pokemonController from "../../../bff/src/main/gateway/http/pokemonController"
  
  console.log(pokemonController.getSinglePokemon("3", "3", "3"))

</script>