import Vue from 'vue'
import Vuex from 'vuex'

// import UserStore from './modules/UserStore.js'
// import SocketStore from './modules/SocketStore.js'
// import ReviewStore from './modules/ReviewStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    // UserStore,
    // SocketStore,
    // ReviewStore
},
  state: {
    itemsToShow: [
      {
        name: "Hut In The Woods",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nobis dolore aliquid! Vitae fugiat laboriosam voluptatibus voluptas sequi minima, nihil eaque qui incidunt nostrum a tenetur commodi ipsum! Officia, laboriosam?",
        price: 123,
        i: "1234",
        hostId: "2345",
        location: {
          address: {
            continent: "Asia",
            country: "Israel",
            Street: "Habonim",
            streetNo: 4
          },
          coords: {
            lon: 12,
            lat: 21
          }
        },
        images: [
          {
            type: "surroundings",
            url:
              "https://blenderartists.org/uploads/default/original/3X/6/1/61f16a294be7a9adb48900e1a542511e166aa79f.jpg"
          },
          {
            type: "nature",
            url: "https://static.puzzlefactory.pl/puzzle/182/314/original.jpg"
          }
        ],
        reviews: {
          avgRating: 4.3,
          reviewsIds: []
        },
        type: ["nature", "woods"],
        availableDates: []
      },
    ],
  },
  getters: {
    itemsToShow(state) {
      return state.itemsToShow;
    },
  },
  mutations: {
    setItemsToShow(state, { itemsToShow }) {
      state.itemsToShow = itemsToShow;
    }
  },
  actions: {
    loadItems(context) {
      return itemService.getItems()
        .then(items => context.commit({ type: 'setItems', items }));
    }
  },
})
