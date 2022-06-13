const Pokemon = require("../../domain/pokemon")
const PokemonList = require("../../domain/pokemonList")
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

function createPokemonList(data) {
    let pokemonList = []
    let imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
    for (const element of data) {
        let name = element.name
        let id = element.url.split('/')[6]
        let image = imageUrl.replace('0', id)
        let pokemon = new PokemonList(id, name, image)
        pokemonList.push(pokemon)
    }
    return pokemonList
}

const pokemonController = {
    getAllPokemon: async (_req, res) => {
        const url = API + "all"
        const response = await axios.get(url)
        const pokemonList = createPokemonList(response.data['results'])

        res.status(200).send(pokemonList)
    },

    getSinglePokemon: async (_req, res, nameOrId) => {
        const url = API + nameOrId
        const response = await axios.get(url)
        const pokemon = createPokemon(response.data)

        res.status(200).send(pokemon)
    }
}

module.exports = pokemonController