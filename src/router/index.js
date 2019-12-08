import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import houses from '../views/Houses.vue'
import houseDetails from '../views/HouseDetails'
import map from '../views/HouseMap.vue'
import userProfile from '../views/UserProfile'
import HostDashboard from '../views/HostDashboard'
import userOrder from '../views/UserOrder'
import orderDetails from '../views/OrderDetails'
import login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/house/:q?/:d?',
    name: 'house',
    component: houses,

  },
  {
    path: '/map',
    name: 'map',
    component: map
  },
  {
    path: '/house/details/house/:_id',
    name: 'house-details',
    component: houseDetails
  },
  {
    path: '/user-profile/',
    name: 'user-profile',
    component: userProfile
  },
  {
    path: '/host/:_id?',
    name: 'host',
    component: HostDashboard
  },
  {
    path: '/order/house/:_id',
    name: 'order',
    component: userOrder
  },
  {
    path: '/order/:_id',
    name: 'order-details',
    component: orderDetails
  },
  {
    path: '/login',
    name: 'simpleLogin',
    component: login
  },
  {
    path: '/login/:_id',
    name: 'loginToHouse',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router