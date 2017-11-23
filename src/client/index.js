import Vue from 'vue'
import App from './App.vue'
import VueSocket from 'vue-socket.io'

Vue.config.productionTip = false

const socket = require('socket.io-client')('http://127.0.0.1:3000')

Vue.use(VueSocket, socket)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
