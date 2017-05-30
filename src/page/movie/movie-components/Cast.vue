<template>
	<div>
		<m-cell title='影人' size="large" class="movie-cell">
		</m-cell>
		<div class="swiper-container" ref="casts">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item, index) in list" :key="index">
					<router-link :to="{name:'Movie'}" tag="a">
						<img :src="item.avatars.small">	
						<p class="name">{{item.name}}</p>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import 'swiper'
	import mCell from '@/components/cell'

	export default {
		components: {
			mCell
		},
		props: {
			list: {
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
			new Swiper(_this.$refs.casts, {
				freeMode: true,
				slidesPerView: 'auto',
				spaceBetween: _this.spaceBetween
			})
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-slide {
		width: 105px;
		&:nth-of-type(1) {
			margin-left: 15px;
		}
		&:last-of-type {
			margin-right: 15px;
		}
		a {
			display: block;
			color: #999;
			text-align: center;
			img {
				height: 150px;
			}
		}
	}
</style>