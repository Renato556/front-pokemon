import Vue from 'vue'
import VueRouter from 'vue-router'
import PokedexView from '../views/PokedexView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/pokedex'
  },
  {
    path: '/pokedex',
    component: PokedexView,
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
