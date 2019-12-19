import Vue from 'vue'
import App from './App.vue'
import vuetify from 'vuetify'
import router from './router'
import axios from 'axios'
import vuex from 'vuex'
import promise from 'es6-promise/auto'
import vueElementLoading from 'vue-element-loading'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router,
  axios,
  vuex,
  promise,
  vueElementLoading
}).$mount('#app')
