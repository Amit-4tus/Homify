import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import items from '../views/items.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/items',
    name: 'items',
    component: items
  }
]

const router = new VueRouter({
  routes
})

export default router