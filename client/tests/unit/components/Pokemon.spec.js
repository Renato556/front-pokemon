import { shallowMount } from "@vue/test-utils";
import PokemonModal from "@/components/PokemonModal.vue";
import Pokemon from "@/components/Pokemon.vue";
import pokemonApi from "@/gateways/pokemon.api";

const pokemon = {
  data: "pokemon",
};
jest.mock("@/gateways/pokemon.api", () => ({
  getOnePokemon: jest.fn().mockReturnValue(pokemon),
}));

const factory = (propsData) =>
  shallowMount(Pokemon, {
    propsData: {
      ...propsData,
    },
    mocks: {
      $route: {
        query: {
          search: "nameOrId",
        },
      },
    },
  });

describe("Pokemon", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("When component initializes", () => {
    const context = {
      getPokemon: jest.fn(),
    };

    beforeEach(() => {
      Pokemon.created.call(context);
    });

    it("Then validate name", () => {
      expect(Pokemon.name).toEqual("PokemonComponent");
    });

    it("Then import components", () => {
      expect(Pokemon.components.PokemonModal).toEqual(PokemonModal);
    });

    it("Then initialize data", () => {
      expect(Pokemon.data()).toEqual({
        pokemon: {},
        showModal: false,
      });
    });

    it("Then initialize created", () => {
      expect(context.getPokemon).toHaveBeenCalled();
    });
  });

  describe("When getPokemon is called", () => {
    let wrapper = factory();

    beforeEach(async () => {
      await wrapper.vm.getPokemon();
    });

    afterAll(() => {
      wrapper.destroy();
    });

    it("Then pokemonApi.getOnePokemon should be called", () => {
      expect(pokemonApi.getOnePokemon).toHaveBeenCalledWith("nameOrId");
    });

    it("Then pokemonApi.getOnePokemon returns pokemon", () => {
      expect(wrapper.vm.pokemon).toEqual(pokemon.data);
    });
  });
});
