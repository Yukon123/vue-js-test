import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/tool/element-ui.js'
import * as echarts from 'echarts'
window.echarts = echarts
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)
Vue.config.productionTip = false

// Vue.config.errorHandler = function (err, vm, info) {
//   console.log(err, vm, info)
// }

axios.defaults.baseURL = 'http://39.108.224.26:5000/api/private/v1/'
Vue.prototype.$http = axios
/***********    qiu1 start  ***********/
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
/***********    qyl tyy  start  ***********/
/***********    qiu2 start  ***********/
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
