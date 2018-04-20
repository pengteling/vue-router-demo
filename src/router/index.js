/* 
route 单条路由
routes 一组路由
router 路由管理者
客户端路由实现方式： 
mode: hash  (#)
      history 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'
import Me from '@/components/Me'
import Category from '@/components/Category'
Vue.use(Router)
// const routes = [
//   {
//     path: '/',
//     component: Home
//   },
//   {
//     path: '/about',
//     component: About
//   }
// ]
export default new Router({
  mode:'history',
  routes:[
    {
      // name: 'home',
      path: '/',
      component: Home,
      children:[
        {
          path:'', component:Me ,name:'me'
        },
        {
          path: 'me', component:Me ,name:'me2'
        },
        {
          path: 'category', component: Category,name:'category'
        }
      ]
    },
    {
      path: '/about',
      component: About,
      name:'about',
      children:[
        {
          name :'tel',path: 'tel' ,component:{ render :h=>h("div","tel:021-1223456")}
        }
      ]
    },
    {
      // path: '/user/:userid/photo/:photid',
      name: 'user',
      path: '/user/:userid',
      component: User
    }
  ]
})