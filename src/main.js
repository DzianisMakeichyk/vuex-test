import Vue from 'vue'
import App from './App.vue'
//Import Vuex Store
import store from './store.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //Import Vuex Store
  store
}).$mount('#app')
