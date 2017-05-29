<template>
	<div class="page">
		<m-Header fixed title="豆瓣电影" class="page-header"></m-Header>
		<div class="page-container">
			<m-movie-group
				:list="inTheaters"
				title="影院热映"
				path="InTheaters"
			></m-movie-group>
			<div class="line"></div>
			<!-- 注意这个ifStar，字面量语法 vs 动态语法 -->
			<m-movie-group
				:list="comingSoon"
				title="即将上映"
				path="ComingSoon"
				:ifStar="false"
			></m-movie-group>
			<div class="line"></div>
			<m-rank-group
				:rankList="rankList"
				:spaceBetween="15" 
			></m-rank-group>
		</div>
	</div>
</template>

<script>
	import { Header } from 'mint-ui'
	import mMovieGroup from './movie-components/MovieGroup'
	import mRankGroup from './movie-components/MovieRankGroup'
	import { bus } from '@/bus' // 用于非父子组件通信

	export default {
		components: {
			mHeader: Header,
			mMovieGroup,
			mRankGroup
		},
		data () {
			return {
				inTheaters: {},
				comingSoon: {},
				/* static放图片， assets放JS/CSS */
				rankList: [
					{
						img:'/static/images/jingxuan01.jpg',
						name:'Top250'
					},
					{
						img:'/static/images/jingxuan02.jpg',
						name:'Weekly'
					},
					{
						img:'/static/images/jingxuan03.jpg',
						name:'New_movies'
					},
					{
						img:'/static/images/jingxuan04.jpg',
						name:'Us_box'
					}
				]
			}
		},
		methods: {
			getInTheaters () { // 正在热映
				return this.axios.get('api/movie/in_theaters?count=10')
			},
			getComingSoon () { // 即将上映
				return this.axios.get('api/movie/coming_soon?count=10')
			}
		},
		mounted () {
			this.axios.all([ // all:并发
				this.getInTheaters(),
				this.getComingSoon()
				])
				.then(this.axios.spread((inTheaters, comingSoon) => { // spread:并发处理
					this.inTheaters = inTheaters.data
					this.comingSoon = comingSoon.data
					// 都完成后执行事件触发, 渲染组件
					bus.$emit('initSwiper')
				}))
		}
	}
</script>

<style lang="scss">
	.line {
		width: 100%;
		height: 10px;
		background: #f7f7f7;
	}
</style>