const { default: axios } = require('axios')
const pokemonController = require('../../../main/gateway/http/pokemonController')

jest.spyOn(axios, 'get')

describe('Given pokemonController', () => {
    const API = "http://localhost:8081/pokemon/"
    const req = {}
    const res = {
        status: jest.fn().mockReturnValue({ 
            send: jest.fn()
        })
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    describe('When getAllPokemon is called', () => {
        const listaPokemon = { 
            data: "listaPokemon"
        }

        beforeEach(() => {
            axios.get.mockResolvedValue(listaPokemon)
            pokemonController.getAllPokemon(req, res)
        })

        it('Then axios.get is called', () => {
            expect(axios.get).toHaveBeenCalledWith(API + 'all')
        })

        it('Then res.status is called', () => {
            expect(res.status).toHaveBeenCalledWith(200)
        })

        it('Then res.status().send is called', () => {
            expect(res.status().send).toHaveBeenCalledWith("listaPokemon")
        })
    })

    describe('When getOnePokemon is called', () => {
        const mockNameOrId = "qualquerCoisa"

        describe('And is successful', () => {
            const pokemon = {
                data: "unicoPokemon"
            }
            
            beforeEach(() => {
                axios.get.mockResolvedValue(pokemon)
                pokemonController.getOnePokemon(req, res, mockNameOrId)
            })

            it('Then axios.get is called', () => {
                expect(axios.get).toHaveBeenCalledWith(API + mockNameOrId)
            })

            it('Then res.status success is called', () => {
                expect(res.status).toHaveBeenCalledWith(200)
            })

            it('Then res.status().send success is called', () => {
                expect(res.status().send).toHaveBeenCalledWith("unicoPokemon")
            })
        })

        describe('And throws an error', () => {
            beforeEach(() => {
                axios.get.mockRejectedValue()
                pokemonController.getOnePokemon(req, res, mockNameOrId)
            })

            it('Then axios.get throws an error', () => {
                expect(axios.get).rejects.toThrow(Error)
            })

            it('Then res.status is called', () => {
                expect(res.status).toHaveBeenCalledWith(404)
            })

            it('Then res.status().send is called', () => {
                expect(res.status().send).toHaveBeenCalledWith("Pokemon not found")
            })
        })
    })
})