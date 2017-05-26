import Vue from 'vue'
import Router from 'vue-router'

import Tab from '@/page/tab/Tab.vue'
import Index from '@/page/index/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/tab',
  		name: 'Tab',
  		component: Tab,
  		children: [
  			{
  				path: 'index',
  				name: 'Index',
  				component: Index
  			}
  		]
  	},
  	{
		path: '/',
		redirect: '/Tab/index'
  	},
  	{
		path: '*',
		redirect: '/Tab/index'
  	}
  ]
})
