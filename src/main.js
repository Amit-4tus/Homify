import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import scss from './styles/global.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.config.productionTip = false
Vue.use(ElementUI,{ locale });
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAQfVUk4CHwfLcp1CWGmPN4hNhp4Mo2Xb4',
    libraries: 'places',
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//google maps