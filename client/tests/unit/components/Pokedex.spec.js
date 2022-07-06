import { shallowMount } from "@vue/test-utils";
import PokemonModal from "@/components/PokemonModal.vue";
import Pokedex from "@/components/Pokedex.vue";
import pokemonApi from "@/gateways/pokemon.api";

const pokemonList = {
  data: ["pokemon1", "pokemon2", "pokemon3", "pokemon4"],
};
const pokemon = {
  data: "pokemon",
};
jest.mock("@/gateways/pokemon.api", () => ({
  getPokemonList: jest.fn().mockReturnValue(pokemonList),
  getOnePokemon: jest.fn().mockReturnValue(pokemon),
}));

const factory = (propsData) =>
  shallowMount(Pokedex, {
    propsData: {
      ...propsData,
    },
  });

describe("Pokedex", () => {
  let wrapper = factory();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    wrapper.destroy();
  });

  describe("When component initializes", () => {
    const context = {
      getPokemonList: jest.fn(),
    };

    beforeEach(() => {
      Pokedex.created.call(context);
    });

    it("Then validate name", () => {
      expect(Pokedex.name).toEqual("PokedexComponent");
    });

    it("Then import components", () => {
      expect(Pokedex.components.PokemonModal).toEqual(PokemonModal);
    });

    it("Then initialize data", () => {
      expect(Pokedex.data()).toEqual({
        pokemonList: {},
        rows: [],
        showModal: false,
        pokemonData: {},
      });
    });

    it("Then initialize created", () => {
      expect(context.getPokemonList).toHaveBeenCalled();
    });
  });

  describe("When getPokemonList is called", () => {
    const context = {
      pokemonList: {},
      groupColumns: jest.fn(),
    };

    beforeEach(() => {
      Pokedex.methods.getPokemonList.call(context);
    });

    it("Then pokemonApi.getPokemonList is called", () => {
      expect(pokemonApi.getPokemonList).toHaveBeenCalled();
    });

    it("Then groupColumns is called", () => {
      expect(context.groupColumns).toHaveBeenCalledWith(pokemonList.data);
    });

    it("Then pokemonApi.getPokemonList returns pokemonList", () => {
      expect(context.pokemonList).toEqual(pokemonList.data);
    });
  });

  describe("When groupColumns is called", () => {
    const expectedRows = [
      ["pokemon1", "pokemon2", "pokemon3"],
      ["pokemon4", "pokemon5", "pokemon6"],
    ];
    const pokemonRows = [
      "pokemon1",
      "pokemon2",
      "pokemon3",
      "pokemon4",
      "pokemon5",
      "pokemon6",
    ];

    beforeEach(() => {
      wrapper.vm.rows = [];
      wrapper.vm.groupColumns(pokemonRows);
    });

    it("Then return an divided array in rows", () => {
      expect(wrapper.vm.rows).toEqual(expectedRows);
    });
  });

  describe("When initializeModal is called", () => {
    const mockPokemonId = "mockId";

    beforeEach(async () => {
      await wrapper.vm.initializeModal(mockPokemonId);
    });

    it("Then pokemonApi.getOnePokemon is called", () => {
      expect(pokemonApi.getOnePokemon).toHaveBeenCalledWith("mockId");
    });

    it("Then pokemonApi.getOnePokemon returns pokemon", () => {
      expect(wrapper.vm.pokemonData).toEqual(pokemon.data);
    });

    it("Then showModal is true", () => {
      expect(wrapper.vm.showModal).toEqual(true);
    });
  });
});
