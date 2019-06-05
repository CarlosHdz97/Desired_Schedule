import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.config.productionTip = false

Vue.use(VueAxios,axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
