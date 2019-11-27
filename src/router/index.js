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
    path: '/about',
    name: 'about',
  },
  {
    path: '/user/?id',
    name: 'user-profile',
  }
]

const router = new VueRouter({
  routes
})

export default router