import Vue from 'vue'
import Vuex from 'vuex'



import houseStore from '../modules/HouseStore'
import UserStore from '../modules/UserStore'
// import SocketStore from './modules/SocketStore.js'
// import ReviewStore from './modules/ReviewStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    UserStore,
    houseStore,
    // SocketStore,
    // ReviewStore
  },
})