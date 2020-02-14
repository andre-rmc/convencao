require('./configs/bootstrap')
require('./configs/directives')

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueCarousel from 'vue-carousel'
import _ from 'lodash'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueCarousel)
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBAQS60YIGR9YKb8-210O2bxbl0iZoeBMI',
    libraries: 'places'
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
