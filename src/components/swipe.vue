<template>
	<div class="swiper-container" :class="swipeid">
		<div class="swiper-wrapper">
			<slot name="swiper-item"></slot>
		</div>
		<div :class="{'swiper-pagination':pagination}" :style="{'text-align':paginationPosition}"></div>
	</div>
</template>

<script>
	import '../lib/swiper/js/swiper.js'

	export default {
		props: {
			swipeid: { // 当有多个swiper时会用到标识符
				type: String,
				default: ''
			},
			effect: { // 特效
				type: String,
				default: 'slide'
			},
			loop: { // 循环
				type: Boolean,
				default: true
			},
			direction: { // 方向
				type: String,
				default: 'horizontal'
			},
			autoplay: { // 自动播放
				type: Number,
				default: 5000
			},
			paginationType: { // 分页器类型
				type: String,
				default: 'bullets'
			},
			pagination: { // 分页器
				type: Boolean,
				default: true
			},
			paginationPosition: { // 分页器位置
				type: String,
				default: 'center'
			}
		},
		mounted () {
			var _this = this
			new Swiper('.' + _this.swipeid, {
				// 循环
				loop: _this.loop,
				// 分页器
				pagination: '.swiper-pagination',
				// 分页器类型
				paginationType: _this.paginationType,
				// 自动播放
				autoplay: _this.autoplay,
				// 播放方向,
				direction: _this.direction,
				// 特效
				effect: _this.effect,
				// 用户操作时是否禁止autoplay
				autoplayDisableOnInteraction: false
			})
		}
	}
</script>

<style>
	.swiper-container img {
		width: 100%;
	}
	.swiper-pagination-bullet-active {
		background: gray;
	}
</style>