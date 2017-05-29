<template>
	<div>
		<div class="swiper-container" ref="movie">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"
					v-for="(item, index) in list.subjects"
					:key="index"
		        >
		        	<router-link :to="{ name: 'Index', params:{id: item.id}}" tag='a'>
		        		<img :src="item.images.medium" alt="">
		        		<div class="text">{{ item.title }}</div>
		        		<m-star v-if="ifStar" :num="item.rating.average">
		        		</m-star>
		        		<span v-else class="collect_count">
		        			{{ item.collect_count }} 人想看
		        		</span>	
		        	</router-link>
		        </div>
		        <div class="swiper-slide" v-if="isShow">
		        	<router-link :to="{ name: path }" tag='a'>
		        		<img src="/static/images/movie-all-gray.png" alt="">
		        		<div class="text-all">全部<br>{{ list.total }}部</div>
		        	</router-link>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
	import { bus } from '../../../bus.js'
	import '../../../lib/swiper/js/swiper.js'
	import mStar from '../../../components/star'

	export default {
		components: {
			mStar
		},
		props: {
			list: {
				type: Object
			},
			ifStar: {
				type: Boolean,
				default: true
			},
			path: {
				type: String,
				default: '/'
			}
		},
		data () {
			return {
				isShow: false
			}
		},
		methods: {
			initSwiper () {
				let swiper = new Swiper(this.$refs.movie, {
					freeMode: true, // 自由滑动
					slidesPerView: 'auto', // 同时显示的slides的数量
					spaceBetween: 15 // sliders间距
				})
			}
		},
		created () {
			bus.$on('initSwiper', () => { // 数据接收完毕后触发
				this.isShow = true // 显示视图
				this.$nextTick(() => { // 更新视图
					this.initSwiper()
				})
			})
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-container {
		width: 100%;
		height: 200px;

		.swiper-slide {
			width: 100px;
			&:nth-of-type(1) {
				margin-left: 15px;
			}
			&:last-of-type {
				margin-right: 15px;
			}
			a {
				font-size: 1.4rem;
				font-weight: bolder;
				color: black;
			}
			img {
				width: 100%;
				height: 150px;
			}
			.text {
				width: 100%;
				padding-top: 5px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.text-all {
				position: absolute;
				left: 0;
				top: 0;
				width: 100px;
				height: 150px;
				display: flex;
				flex: 1;
				align-items:center;
				justify-content: center;
				color: #999;
			}
			.collect_count {
				color: #999;
				font-weight: normal;
				font-size: 1rem;
			}
		}
	}
</style>