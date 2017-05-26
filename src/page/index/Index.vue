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
			</div>
		</div>
	</div>
</template>

<script>
	import { Header } from 'mint-ui'
	import mSwipe from '../../components/swipe'
	import mCell from '../../components/cell'

	export default {
		components: {
			mHeader: Header,
			mSwipe,
			mCell
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/color.scss';

	.page-header {
		font-size: 2rem;
		font-weight: bolder;
		height: 50px;
		background: $headerBg;
	}

	.swipe-style {
		margin-top: 50px;
		.swipe-item-style {
			background: $headerDefaultColor;
			img {
				width: 100%;
			}
		}
	}

	.hot-wrap {
		margin-top: 10px;
	}
</style>