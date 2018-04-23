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
Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path: "/",
      components:{
        default: Main,
        footer: Footer
      },
      children:[
        {name:'Home', path:'',component:Home},
        { name: 'Category', path: 'category', component: Category}
      ]
    },
    
  ]
})