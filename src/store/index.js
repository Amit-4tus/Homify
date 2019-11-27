import Vue from 'vue'
import Vuex from 'vuex'

import itemStore from './modules/item-store'
// import UserStore from './modules/UserStore.js'
// import SocketStore from './modules/SocketStore.js'
// import ReviewStore from './modules/ReviewStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    itemStore,
    // UserStore,
    // SocketStore,
    // ReviewStore
  },
})