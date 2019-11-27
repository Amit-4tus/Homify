import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/user-profile'

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
  }

]

const router = new VueRouter({
  routes
})

export default router