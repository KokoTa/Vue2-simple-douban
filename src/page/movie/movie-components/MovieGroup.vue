<template>
	<div>
		<!-- head -->
		<m-cell :title="title" size="large" class="movie-cell">		
			<router-link :to='{name: path}' tag='a' slot='cell-right'>
				<span class="more">更多<img src="/static/images/ic_arrow_green_right.png" alt=""></span>
			</router-link>
		</m-cell>
		<!-- body -->
		<m-movie-swipe :ifStar="ifStar" :list="list" :path="path">
		</m-movie-swipe>
	</div>
</template>

<script>
	import mCell from '../../../components/cell'
	import mMovieSwipe from './MovieSwipe'

	export default {
		components: {
			mCell,
			mMovieSwipe
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			path: {
				type: String,
				default: '/'
			},
			list: {
				type: Object
			},
			ifStar: { // 是否显示星星
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../assets/color.scss';
</style>