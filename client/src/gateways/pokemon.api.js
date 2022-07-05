import axios from 'axios'

const API = "http://localhost:8082/api/pokemon/"

const pokemonApi = {
    async getPokemonList() {
        return await axios.get(API + "all")
    },
    async getOnePokemon(nameOrId) {
        return await axios.get(API + nameOrId)
    }
}

export default pokemonApi
