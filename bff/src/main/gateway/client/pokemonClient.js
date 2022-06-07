const Pokemon = require("/home/renatocrds/Desktop/Cursos/Treinamento Pokedex/front-pokemon/bff/src/main/domain/pokemon.js")
const axios = require('axios').default;

const API = "http://localhost:8081/pokemon/"

export function getAllPokemon() {
  axios.get(API + "all")
  .then(function (response) {
    let data = response.data
    let qtd = data.count
    let pokemonArray = data.results
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

export function getSinglePokemon(nameOrId) {
  axios.get(API + nameOrId)
  .then(function (response) {
      return getSinglePokemonData(response.data)
  })
  .catch(function (error){
      console.log(error)
  })
}

function getSinglePokemonData(data) {
  return new Pokemon(
      data.name, 
      data.sprites.front_default, 
      data.base_experience,
      data.height, 
      data.weight, 
      data.types, 
      data.abilities
      )
}