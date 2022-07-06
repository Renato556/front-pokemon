import PokemonView from "@/views/PokemonView";
import Pokemon from "@/components/Pokemon";
import AppView from "@/views/AppView";

describe("PokemonView", () => {
  describe("When component initializes", () => {
    it("Then validate name", () => {
      expect(PokemonView.name).toEqual("PokemonView");
    });

    describe("And import components", () => {
      it("Then check Pokedex", () => {
        expect(PokemonView.components.Pokemon).toEqual(Pokemon);
      });
      it("Then check AppView", () => {
        expect(PokemonView.components.AppView).toEqual(AppView);
      });
    });
  });
});
