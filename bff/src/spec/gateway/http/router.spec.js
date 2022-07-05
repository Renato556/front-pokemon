const mockPokemonController = {
    getAllPokemon: jest.fn(),
    getOnePokemon: jest.fn()
}
jest.mock('../../../main/gateway/http/pokemonController', () => (mockPokemonController))

const router = require('../../../main/gateway/http/router')

const findRoute = (mockRoutes, routeName, callbackIndex = 1, middlewareIndex = 1) => {
    const call = mockRoutes.mock.calls.find(c => c[0].toString() === routeName.toString())
    return { name: call[0], callback: call[callbackIndex], middleware: call[middlewareIndex] }
}

describe('Given router is called', () => {
    let mockContext
    let routerRoute
    const req = {
        params: {
            nameOrId: 'qualquerCoisa'
        }
    }
    const res = {}

    beforeEach(() => {
        jest.clearAllMocks()
        mockContext = {
            get: jest.fn()
        }
        router(mockContext)
    })
    
    describe('When route /api/pokemon/all is called', () => {
        beforeEach(() => {
            routerRoute = findRoute(mockContext.get, '/api/pokemon/all')
            routerRoute.callback(req, res)
        })

        it('Then should call pokemonController.getAllPokemon', () => {
            expect(mockPokemonController.getAllPokemon).toHaveBeenCalledWith(req, res)
        })
    })

    describe('When route /api/pokemon/:nameOrId is called', () => {
        beforeEach(() => {
            routerRoute = findRoute(mockContext.get, '/api/pokemon/:nameOrId')
            routerRoute.callback(req, res)
        })

        it('Then should call pokemonController.getOnePokemon', () => {
            expect(mockPokemonController.getOnePokemon).toHaveBeenCalledWith(req, res, 'qualquerCoisa')
        })
    })
})