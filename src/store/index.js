import Vue from 'vue'
import Vuex from 'vuex'



import houseStore from '../modules/HouseStore'
import reviewStore from '../modules/ReviewStore'
import UserStore from '../modules/UserStore'
import OrderStore from '../modules/OrderStore'
import SocketStore from '../modules/SocketStore'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    UserStore,
    houseStore,
    reviewStore,
    OrderStore,
    SocketStore,
    
  },
})