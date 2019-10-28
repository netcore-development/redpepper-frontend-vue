import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue'
import BootstrapVue from 'bootstrap-vue'
import VueTheMask from 'vue-the-mask'


Vue.use(VueTheMask);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
