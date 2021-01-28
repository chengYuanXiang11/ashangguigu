import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

const service = axios.create({
  withCredentials: true // 跨域携带cookie
})

Vue.prototype.$axios = service

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
