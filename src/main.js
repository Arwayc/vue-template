import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import './plugins/mixinhttp.js'
import "./assets/photon/css/photon.css";
import router from './router/index.js'
import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
