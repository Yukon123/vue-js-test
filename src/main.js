import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
console.log({ axios })
axios.defaults.baseURL = 'http://39.108.224.26:5000/api/private/v1/'
Vue.prototype.$http = axios

axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
