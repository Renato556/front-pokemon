const pokemonController = require('./pokemonController')

module.exports = (router) => {
    router.get("/api/pokemon/all", async(req, res) => {
        await pokemonController.getAllPokemon(req, res)
    })

    router.get("/api/pokemon/:nameOrId", async(req,res) => {
        await pokemonController.getSinglePokemon(req, res, req.params['nameOrId'])
    })

    return router
}