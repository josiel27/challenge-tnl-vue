import Vue from 'vue'
import App from './App.vue'

// Adicionando os icones do fonawesom
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faArrowUp, faArrowDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)


require('./assets/main.scss')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
