const { default: axios } = require("axios")

const API = "http://localhost:8081/pokemon/"

const pokemonController = {
    getAllPokemon: async (_req, res) => {
        const url = API + "all"
        const response = await axios.get(url)

        res.status(200).send(response.data)
    },

    getOnePokemon: async (_req, res, nameOrId) => {
        const url = API + nameOrId
        const response = await axios.get(url)
        .catch(() => {
            res.status(404).send("Pokemon not found")
        })
        res.status(200).send(response.data)
    }
}

module.exports = pokemonController