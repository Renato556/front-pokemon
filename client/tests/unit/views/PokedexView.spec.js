import PokedexView from "@/views/PokedexView";
import Pokedex from "@/components/Pokedex";
import AppView from "@/views/AppView";

describe("PokedexView", () => {
  describe("When component initializes", () => {
    it("Then validate name", () => {
      expect(PokedexView.name).toEqual("PokedexView");
    });

    describe("And import components", () => {
      it("Then check Pokedex", () => {
        expect(PokedexView.components.Pokedex).toEqual(Pokedex);
      });
      it("Then check AppView", () => {
        expect(PokedexView.components.AppView).toEqual(AppView);
      });
    });
  });
});
