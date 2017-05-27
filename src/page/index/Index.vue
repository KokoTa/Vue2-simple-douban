<template>
	<div class="page">
		<!-- 头 -->
		<m-header fixed title="首页" class="page-header"></m-header>
		<div class="page-container">
			<!-- 滑块, 由于mint-ui内置的swipe组件存在高度无法自适应Bug，因此单独引用swipe官方版 -->
			<m-swipe :autoplay="3000" swipeid="S1">
				<div class="swiper-slide " slot="swiper-item"><img src="../../assets/images/01.jpg" alt=""></div>
				<div class="swiper-slide " slot="swiper-item"><img src="../../assets/images/02.jpg" alt=""></div>
				<div class="swiper-slide " slot="swiper-item"><img src="../../assets/images/03.jpg" alt=""></div>
			</m-swipe>
			<!-- 热点 -->
			<div class="hot-wrap">
				<!-- 多功能栏 -->
				<m-cell title="热点" label="hot"></m-cell>
				<!-- 热点栏 -->
				<m-hot-item v-for="(item, index) in hotData" 
				:key="item.id" 
				:title="item.title" 
				:describe="item.target.desc" 
				:author="item.target.author.name" 
				:column="item.source_cn" 
				:img="item.target.cover_url">
				</m-hot-item>
			</div>
		</div>
	</div>
</template>

<script>
	import { Header } from 'mint-ui'
	import mSwipe from '../../components/swipe'
	import mCell from '../../components/cell'
	import mHotItem from '../../components/hot-item'

	export default {
		components: {
			mHeader: Header,
			mSwipe,
			mCell,
			mHotItem
		},
		data () {
			return {
				recommend: [],
				hotData: []
			}
		},
		created () {
			this.fetchData()
		},
		methods: {
			fetchData () {
				// 请求路径见dev-server配置
				this.axios.get('/api/homeData').then((res) => {
					console.log(res)	
					let data = res.data.data.recommend_feeds
					let recommend = [], hot = []
					for(var i in data) {
						if(data[i].card && data[i].card.name == '为你推荐') {
							recommend.push(data[i])
						} else {
							hot.push(data[i])
						}
					}
					this.recommend = recommend
					this.hotData = hot
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/color.scss';

	.page {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 100%;
		transition: all .5s ease;
	}
	.page-header {
		font-size: 2rem;
		font-weight: bolder;
		height: 50px;
		background: $headerBg;
		z-index: 1;
	}	
	.page-container {
		position: absolute;
		left: 0;
		right: 0;
		top: 50px;
		bottom: 50px;
		overflow: auto;
		-webkit-overflow-scrolling:touch;
		z-index: 0;
	}

	.hot-wrap {
		margin-top: 10px;
	}
</style>