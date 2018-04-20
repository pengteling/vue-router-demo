import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
Vue.use(Router)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
const router = new Router({
  mode:'history',
  routes
})
// const root = document.createElement('div')
// document.body.appendChild(root)
//k+1
/* 
route 单条路由
routes 一组路由
router 路由管理者
客户端路由实现方式： 
mode: hash  (#)
      history 
 */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})