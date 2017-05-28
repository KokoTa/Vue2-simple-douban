<template>
	<div class="loading">
		<img src="/static/images/loading_green.gif" />
	</div>
</template>

<style lang='scss'>
	/* 居中蒙版和gif */
	.loading {
		position: fixed;
		z-index: 998;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.5);
		img{
			position: fixed;
			top: 50%;
			left: 50%;
			margin-left: -20px;
			margin-top: -20px;
			z-index: 999;
			width: 40px;
			height: 40px;
		}
	}
</style>