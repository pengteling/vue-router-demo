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
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Category from '@/components/Category'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Me from '@/components/Me'
import Mpointsmall from '@/components/Mpointsmall'
import Phone from '@/components/Phone'
import Tv from '@/components/Tv'
import Computer from '@/components/Computer'
import PhoneView from '@/components/PhoneView'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      components: {
        default: Main,
        footer: Footer
      },
      children: [
        {
          // name: 'Home', 
          path: '',
          component: Home,
          children: [
            {
              path: '', component: Phone
            },
            {
              // name: 'Phone', 
              component: Phone, path: 'phone',
              beforeEnter: (to, from, next) => {
                console.log("beforeEnter")
                next()
              },
              children:[
                {path:'',  component: PhoneView },
                {
                  path: ':id', component: PhoneView ,name:'PhoneView',
                  beforeEnter: (to, from, next) => {
                    console.log("beforeEnter")
                    next()
                  }
                }
              ]
            },
            {
              name: 'Tv', component: Tv, path: 'Tv'
            },
            {
              name: 'Computer', component: Computer, path: 'Computer'
            }

          ],
          beforeEnter: (to, from, next) => {
            console.log("beforeEnter")
            next()
          }
        },
        { name: 'Category', path: 'category', component: Category },
        { name: 'Cart', path: 'Cart', component: Cart },
        {
          name: 'Me', path: 'Me', component: Me,
          beforeEnter: (to, from, next) => {
            console.log("beforeEnter")
            next()
          }
        }
      ]
    },
    {
      path: "/mpointsmall",
      component: Mpointsmall
    }

  ]
})