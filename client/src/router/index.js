import Vue from "vue";
import VueRouter from "vue-router";
import PokedexView from "../views/PokedexView.vue";
import PokemonView from "../views/PokemonView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/pokedex",
  },
  {
    path: "/pokedex",
    component: PokedexView,
  },
  {
    path: "/pokemon",
    component: PokemonView,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
