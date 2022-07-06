import AppView from "@/views/AppView";
import SearchBar from "@/components/SearchBar";

describe("AppView", () => {
  describe("When component initializes", () => {
    it("Then validate name", () => {
      expect(AppView.name).toEqual("AppView");
    });

    it("Then import components", () => {
      expect(AppView.components.SearchBar).toEqual(SearchBar);
    });
  });
});
