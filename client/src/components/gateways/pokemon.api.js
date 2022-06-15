import axios from 'axios'

const API = "http://localhost:8082/api/pokemon/"

const pokemonApi = {
    getPokemonList() {
        return axios.get(API + "all")
    },
    getSinglePokemon(nameOrId) {
        return axios.get(API + nameOrId)
    }
}

export default pokemonApi
