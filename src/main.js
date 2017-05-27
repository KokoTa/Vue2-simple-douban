// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store' // 引入状态，处理loading界面
import loading from './components/loading' // 引入自定义组件loading
import './assets/index.scss' // 全局默认样式
import './lib/swiper/css/swiper.css' // 结合swiper.js使用
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(loading)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
