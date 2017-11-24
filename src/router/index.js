import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import HomePage from '@/components/pages/HomePage'
import OnSale from '@/components/pages/goods/OnSale'
import Release from '@/components/pages/goods/Release'
import Order from '@/components/pages/orders/Order'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
	{
		path: '/login',
    component: Login
//  hidden: true
	},
    {
      path: '/',
      component: Home,
      children:[{
          path:'/homepage',
          component:HomePage
       },{
       	 path:'/onsale',
         component:OnSale
       },{
       		path:"/release",
       		component:Release
       },{
       		path:"/order",
       		component:Order
       }]
    }
  ],
  meta : { requiresAuth : true}
})