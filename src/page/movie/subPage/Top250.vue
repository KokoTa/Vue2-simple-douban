<template>
	<div class="page">
		<!-- head -->
		<m-header fixed title="Top250" class="page-header">
			<router-link :to="{name:'Movie'}" slot="left">
				<img src="/static/images/ic_bar_back_green.png">
			</router-link>
		</m-header>
		<!-- body -->
		<div class="page-container">
			<div class="film">
				<ul class="film-list"
					v-infinite-scroll="loadMore"
					infinite-scroll-immediate-check="true"
					infinite-scroll-disabled="loading">
					<li class="film-item" v-for="(item, index) in data">
						<div class="film-item-index">
							{{ index+1 }}
						</div>
						<router-link tag="div" class="film-item-box" :to="{name: 'MovieDetail', params: {id: item.id}}">
							<img :src="item.images.small" class="thumb">
							<div class="film-item-content">
								<h3>{{ item.title }}</h3>
								<m-star :num="item.rating.average"></m-star>
								<p class="director">
									导演：
									<span v-for="director in item.directors">
										{{ director.name }} /
									</span>
								</p>
								<p class="cast">
									主演：
									<span v-for="cast in item.casts">
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
	import { getTop250 } from '@/router/api'
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
			initData (start, count) { // 初始化数据
				getTop250(start, count).then((data) => {
					this.data = data.subjects
					this.requestNum++
				})
			},
			loadMore () { // 滑动到底部就执行， 懒加载
				this.loading = true
				var start = this.requestNum * 10
				var count = 10
				getTop250(start, count).then((data) => {
					this.data = this.data.concat(data.subjects)
					this.loading = false
					this.requestNum++
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/movieSubPage.scss';
</style>