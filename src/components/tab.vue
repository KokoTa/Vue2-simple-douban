<template>
	<div class="m-tab">
		<slot></slot>
	</div>
</template>

<style lang="scss">
	// 导入颜色变量
	@import '../assets/color.scss';
	
	// flex布局
	.m-tab {
		display: flex;
		flex-direction: row;
		position: fixed;
		z-index: 10;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 50px;
		background: #fff;
		// 顶边框线
		&:before{
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 1px;
			background: $tabBorderColor;
		}
	}

</style>