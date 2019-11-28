import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import houses from '../views/Houses.vue'
import houseDetails from '../views/HouseDetails'
import map from '../views/HouseMap.vue'
import userProfile from '../views/UserProfile'
import HostDashboard from '../views/HostDashboard'
import UserOrder from '../views/UserOrder'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/house',
    name: 'house',
    component: houses
  },
  {
    path: '/map',
    name: 'map',
    component: map
  },
  {
    path: '/house/:_id',
    name: 'house-details',
    component: houseDetails
  },
  {
    path: '/user-profile/',
    name: 'user-profile',
    component: userProfile
  },
  {
    path: '/host/',
    name: 'host',
    component: HostDashboard
  },
  {
    path: '/order/',
    name: 'order',
    component: UserOrder
  }

]

const router = new VueRouter({
  routes
})

export default router