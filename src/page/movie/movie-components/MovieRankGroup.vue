<template>
	<div>
		<m-cell title="精选榜单" size="large" class="movie-cell">
		</m-cell>
		<div class="swiper-container" ref="rank">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(item, index) in rankList" :key="index">
		        	<router-link :to="{ name: 'Top250' }">
		        		<img :src="item.img" alt="">
		        	</router-link>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
	import mCell from '../../../components/cell'
	import '../../../lib/swiper/js/swiper.js'

	export default {
		components: {
			mCell
		},
		props: {
			rankList: {
				type: Array,
				default: []
			},
			spaceBetween: {
				type: Number,
				default: 15
			}
		},
		mounted () {
			var _this = this
			new Swiper(_this.$refs.rank, {
				freeMode: true,
				slidesPerView: 'auto',
				spaceBetween: _this.spaceBetween
			})
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-container {
		width: 100%;
		height: 160px;

		.swiper-slide {
			width: 160px;
			&:nth-of-type(1) {
				margin-left: 15px;
			}
			&:last-of-type {
				margin-right: 15px;
			}
		}
	}
</style>