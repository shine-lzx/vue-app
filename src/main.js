import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './styles/index.scss'
import 'amfe-flexible/index.js'
import * as filters from './filters/index'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
