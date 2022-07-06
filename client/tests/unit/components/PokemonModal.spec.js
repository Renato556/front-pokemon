import PokemonModal from "@/components/PokemonModal";

describe("PokemonModal", () => {
    describe("When component initializes", () => {
        it("Then validate pokemon prop", () => {
            expect(PokemonModal.props).toEqual(["pokemon"])
        })
    })
})