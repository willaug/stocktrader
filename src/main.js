import Vue from 'vue'
import VWave from 'v-wave'
import App from './App.vue'
import './plugins/axios'
import Funds from './components/Funds.vue'
import router from './router.js'
import store from './store'
import './styles/template.scss'

Vue.component('funds', Funds)

Vue.config.productionTip = false

Vue.filter('BRL', function(v) {
  return v.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
})

Vue.use(VWave)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')