const Pokemon = require("../../domain/pokemon")
const { default: axios } = require("axios")

const API = "http://localhost:8081/pokemon/"

function createPokemon(data) {
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

const pokemonController = {
    getAllPokemon: async (req, res) => {
        const url = API + "all"
        const response = await axios.get(url)

        res.status(200).send(response.data)
    },

    getSinglePokemon: async (req, res, nameOrId) => {
        const url = API + nameOrId
        const response = await axios.get(url)
        const pokemon = createPokemon(response.data)

        res.status(200).send(pokemon)
    }
}

module.exports = pokemonController