<template>
	<div class="page">
		<!-- head -->
		<m-header fixed title="口碑榜" class="page-header">
			<router-link :to="{name:'Movie'}" slot="left">
				<img src="/static/images/ic_bar_back_green.png">
			</router-link>
		</m-header>
		<!-- body -->
		<div class="page-container">
			<div class="film">
				<ul class="film-list">
					<li class="film-item" v-for="(item, index) in data">
						<div class="film-item-index">
							{{ index+1 }}
						</div>
						<router-link tag="div" class="film-item-box" :to="{name: 'MovieDetail', params: {id: item.sub.id}}">
							<img :src="item.sub.images.small" class="thumb">
							<div class="film-item-content">
								<h3>{{ item.sub.title }}</h3>
								<m-star :num="item.sub.rating.average"></m-star>
								<p class="director">
									导演：
									<span v-for="director in item.sub.directors">
										{{ director.name }} /
									</span>
								</p>
								<p class="cast">
									主演：
									<span v-for="cast in item.sub.casts">
										{{ cast.name }} /
									</span>
								</p>
							</div>
						</router-link>
					</li>
				</ul>
				<!-- 因为有拦截器的原因， 这个loading似乎木有用 -->
				<p v-show="loading">
					<m-spinner type="fading-circle"></m-spinner>
					加载中...
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Header, InfiniteScroll, Spinner } from 'mint-ui'
	Vue.use(InfiniteScroll) // 全局引入mint就不用写这些了
	import { getUsBox } from '@/router/api'
	import Star from '@/components/star'

	export default {
		components: {
			mHeader: Header,
			mStar: Star,
			mSpinner: Spinner
		},
		data () {
			return {
				data: [],
				loading: false,
				requestNum: 0
			}
		},
		created () {
			this.initData(0, 10)
		},
		mounted () {
			this.loading = false // 不显示加载
		},
		methods: {
			initData () { // 初始化数据
				getUsBox().then((data) => {
					for(let i in data.subjects) {
						this.data.push({
							box: Math.ceil(data.subjects[i].box / 1000),
							sub: data.subjects[i].subject
						})
					}
					this.requestNum++
				})
			},
			// 票房榜就十个， 不用再加载了
			// loadMore () { // 滑动到底部就执行， 懒加载
			// 	this.loading = true
			// 	var start = this.requestNum * 10
			// 	var count = 10
			// 	var arr = []
			// 	getUsBox(start, count).then((data) => {
			// 		for(let i in data.subjects) {
			// 			arr.push({
			// 				box: Math.ceil(data.subjects[i].box / 1000),
			// 				sub: data.subjects[i]
			// 			})
			// 		}
			// 		this.data = this.data.concat(arr)
			// 		console.log(this.data)
			// 		this.loading = false
			// 		this.requestNum++
			// 	})
			// }
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/movieSubPage.scss';
</style>