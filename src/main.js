import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//将axios注册到原型里
import axios from 'axios'
Vue.prototype.$http=axios



Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
