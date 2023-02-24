// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import $axios from './utils'
import store from './store'
import '@/router/control/role'
// import global_ from './components/Global'
import './assets/js/element-ui'
import VueWechatTitle from 'vue-wechat-title'

import './assets/css/index.css'
import '@/assets/iconfont/iconfont.css'
Vue.use(VueWechatTitle)
Vue.prototype.$axios = $axios
// Vue.prototype.$global = global_
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
