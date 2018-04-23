import Vue from 'vue'
import App from './App.vue'
import router from './router'
// const root = document.createElement('div')
// document.body.appendChild(root)
//k+1

router.beforeEach((to,from,next)=>{
  console.log(to)
  console.log(from)
  console.log("beforeEach")
  next()
})
router.beforeResolve((to,from,next)=>{
  console.log("beforeResolve")
  next()
})
router.afterEach((to,from)=>{
  console.log("afterEach")
  // alert("afterEach")
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})