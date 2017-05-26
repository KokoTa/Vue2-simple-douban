<template>
	<div class="m-cell" :class="[label, size]">
		<!-- 左侧图标+标题 -->
		<div class="m-cell-title">
			<slot name="cell-icon"></slot> {{ title }}
		</div>
		<!-- 右侧选项 -->
		<div class="m-cell-right">
			<slot name="cell-right"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			label: {
				type: String,
				default: 'normal'
			},
			size:{
				type:String,
				default:'small'
			}
		}
	}
</script>

<style lang="scss">
	.m-cell {
		position: relative;
		padding-left: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&:before {
			content: '';
			position: absolute;
			left: 0;
			width: 5px;
			height: 100%;
			background: gray;
		}
	}
	.m-cell-title {
		font-size: 1.5rem;
	}
</style>