import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


var test = [

  {
    "type": "host/visitor",
    "name": "name",
    "_id": 123,
    "email": "email",
    "password": "pass",
    "reviewIds": [123],
    "pastHomeIds": [123],
}

]