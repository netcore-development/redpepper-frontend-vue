import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue'

import BootstrapVue from 'bootstrap-vue'
import VueTheMask from 'vue-the-mask'
import moment from 'moment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserEdit);
library.add(faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.prototype.moment = moment;

Vue.use(VueTheMask);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
