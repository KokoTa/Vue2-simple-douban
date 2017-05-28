<template>
	<div class="hot-item-wrap">
		<a href="javascript:;">
			<div class="hot-item-top">
				<div class="hot-item-top-head">
					<div class="hot-item-top-head-wrap">
						<div class="hot-item-top-head-H">
							{{title}}
						</div>
						<div class="hot-item-top-head-D">
							{{describe}}
						</div>
					</div>
				</div>
				<div class="hot-item-top-image" :style="{'background-image': 'url(' + img + ')'}">
				</div>
			</div>
			<div class="hot-item-bottom">
				<p v-if="author">作者：{{author}}</p>
				<p v-if="column">{{column}}</p>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		props: ['author', 'column', 'img', 'describe', 'title']
	}
</script>

<style lang="scss">
	.hot-item-wrap {
		display: flex;
		flex-direction: column;
		padding: 20px 15px;
		position: relative;
		overflow: hidden;
		border-bottom: 1px solid #eee;
		
		.hot-item-top {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			overflow: hidden;
			.hot-item-top-head-wrap {
				padding-right: 25px;
				.hot-item-top-head-H {
					font-size: 2rem;
					font-weight: bolder;
					color: black;
				}
				.hot-item-top-head-D {
					color: #939393;
					font-size: 1rem;
					padding-top: 10px;
				}
			}
			.hot-item-top-image{
				height: 106px;
				min-width: 106px;
				background-position: center center;
				background-size: cover;
			}
		}

		.hot-item-bottom {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-top: 30px;
			color: #bfbfbf;
		}
	}
</style>