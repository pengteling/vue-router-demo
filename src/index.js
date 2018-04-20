import Vue from 'vue'
import App from './App.vue'
import router from './router'
// const root = document.createElement('div')
// document.body.appendChild(root)
//k+1

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})