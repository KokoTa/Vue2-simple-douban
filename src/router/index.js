import Vue from 'vue'
import Router from 'vue-router'

import Tab from '@/page/tab/Tab.vue'
import Index from '@/page/index/Index.vue'
import Movie from '@/page/movie/Movie.vue'
import Film from '@/page/film/Film.vue'
import InTheaters from '@/page/film/subPage/InTheaters.vue'
import ComingSoon from '@/page/film/subPage/ComingSoon.vue'
import MovieDetail from '@/page/movie/subPage/MovieDetail.vue'
import MovieInfo from '@/page/movie/subPage/MovieInfo.vue'
import Top250 from '@/page/movie/subPage/Top250.vue'
import New_movies from '@/page/movie/subPage/New_movies.vue'
import Us_box from '@/page/movie/subPage/Us_box.vue'
import Weekly from '@/page/movie/subPage/Weekly.vue'

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
      path: '/tab/movie/detail/:id',
      name: 'MovieDetail',
      component: MovieDetail,
      children: [
        {
          path: 'movieInfo',
          name: 'MovieInfo',
          component: MovieInfo
        }
      ]
    },
    {
      path: '/tab/movie/top250',
      name: 'Top250',
      component: Top250
    },
    {
      path: '/tab/movie/newMovie',
      name: 'New_movies',
      component: New_movies
    },
    {
      path: '/tab/movie/usBox',
      name: 'Us_box',
      component: Us_box
    },
    {
      path: '/tab/movie/weekly',
      name: 'Weekly',
      component: Weekly
    },
  	{
  		path: '/',
  		redirect: '/tab/index'
  	},
  	{
  		path: '*',
  		redirect: '/tab/index'
  	}
  ]
})
