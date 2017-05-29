import Vue from 'vue'
import Router from 'vue-router'

import Tab from '@/page/tab/Tab.vue'
import Index from '@/page/index/Index.vue'
import Movie from '@/page/movie/Movie.vue'
import Film from '@/page/film/Film.vue'
import InTheaters from '@/page/film/subPage/InTheaters.vue'
import ComingSoon from '@/page/film/subPage/ComingSoon.vue'

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
  			},
        {
          path: 'movie',
          name: 'Movie',
          component: Movie
        }
  		]
  	},
    {
      path: '/tab/movie', // 次路由将被覆盖, 即直接访问该路由访问的是上面的同名路由
      name: 'Film',
      component: Film,
      children: [
        {
          path: 'inTheaters',
          name: 'InTheaters',
          component: InTheaters
        },
        {
          path: 'comingSoon',
          name: 'ComingSoon',
          component: ComingSoon
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
