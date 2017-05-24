<template>
	<div class="m-tab-item">
		<router-link :to="{ name: path }" tag="div">
			<!--内容分发，激活和不激活的图标重叠显示-->
			<span class="m-tab-item-icon">
				<slot name="icon-normal"></slot>
			</span>
			<span class="m-tab-item-icon active">
				<slot name="icon-active"></slot>
			</span>
			<span class="m-tab-item-text">
				<slot name="icon-text"></slot>
			</span>
		</router-link>
	</div>
</template>

<script>
	export default {
		props: {
			path: {
				type: String,
				default: '/'
			}
		}
	}
</script>

<style lang="scss">
	// 导入颜色变量
	@import '../assets/color.scss';

	.m-tab-item {
		flex: 1; // 宽度五五开
		text-align: center;

		.m-tab-item-icon { // 未被点击时
			display: block;
			padding-top: 2px;
			&.active {
				display: none;
			}
			img {
				width: 28px;
				height: 28px;
			}
		}

		.router-link-active { // 被点击时
			.m-tab-item-icon {
				display: none;
				&.active {
					display: block;
				}
			}
		}

		.m-tab-item-text {
			display: block;
			font-size: 10px;
			color: #949494;
		}
	}
</style>