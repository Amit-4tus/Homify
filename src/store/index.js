import Vue from 'vue'
import Vuex from 'vuex'



import itemStore from '../modules/item-store'
import UserStore from '../modules/UserStore'
// import SocketStore from './modules/SocketStore.js'
// import ReviewStore from './modules/ReviewStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    UserStore,
    itemStore,
    // SocketStore,
    // ReviewStore
  },
})