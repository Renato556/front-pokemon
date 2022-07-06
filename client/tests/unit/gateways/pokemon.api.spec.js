const { default: pokemonApi } = require("@/gateways/pokemon.api");
const { default: axios } = require("axios");

jest.spyOn(axios, "get");
axios.get = jest.fn();

describe("Given pokemon.api", () => {
  const API = "http://localhost:8082/api/pokemon/";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("When getPokemonList is called", () => {
    beforeEach(async () => {
      await pokemonApi.getPokemonList();
    });

    it("Then axios.get is called", () => {
      expect(axios.get).toHaveBeenCalledWith(API + "all");
    });
  });

  describe("When getOnePokemon is called", () => {
    const mockNameOrId = "qualquerCoisa";

    beforeEach(async () => {
      await pokemonApi.getOnePokemon(mockNameOrId);
    });

    it("Then axios.get is called", () => {
      expect(axios.get).toHaveBeenCalledWith(API + "qualquerCoisa");
    });
  });
});
