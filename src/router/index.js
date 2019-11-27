import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import items from '../views/items.vue'
import map from '../views/map.vue'
import userProfile from '../views/user-profile'

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
  },
  {
    path: '/map',
    name: 'map',
    component: map
  },
  {
    path: '/user-profile/',
    name: 'user-profile',
    component: userProfile
  }

]

const router = new VueRouter({
  routes
})

export default router