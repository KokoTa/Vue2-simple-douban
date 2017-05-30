<template>
	<div class="filmInfo slide-info">
		<div class="filmInfo-header">	
			<img @click="goBack" src="/static/images/ic_group_history_delete.png">
		</div>
		<div class="filmInfo-content">
			<h3>影片信息：</h3>
			<div class="filmInfo-item">
				<div class="item-left">
					导演：
				</div>
				<div class="item-right">
					<span v-for="(item, index) in data.directors">
						{{item.name}} /
					</span>
				</div>
			</div>
			<div class="filmInfo-item">
				<div class="item-left">
					主演：
				</div>
				<div class="item-right">
					<span v-for="(item, index) in data.casts">
						{{item.name}} /
					</span>
				</div>
			</div>
			<div class="filmInfo-item">
				<div class="item-left">
					又名：
				</div>
				<div class="item-right">
					<span v-for="(item, index) in data.aka">
						{{item}} /
					</span>
				</div>
			</div>
			<div class="filmInfo-item">
				<div class="item-left">
					类型：
				</div>
				<div class="item-right">
					<span v-for="(item, index) in data.genres">
						{{item}} /
					</span>
				</div>
			</div>
			<div class="filmInfo-item">
				<div class="item-left">
					地区：
				</div>
				<div class="item-right">
					<span v-for="(item, index) in data.countries">
						{{item}} /
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { getMovieDetail } from '@/router/api'

	export default {
		data () {
			return {
				data: {}
			}
		},
		created () {
			this.initData()
		},
		methods: {
			goBack () {
				this.$router.go(-1)
			},
			initData () {
				getMovieDetail(this.$route.params.id).then((data) => {
					this.data = data 
				})
			}

		}
	}
</script>

<style lang="scss">
	.filmInfo {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		z-index: 10;
		transition: all .5s ease;

		.filmInfo-header {
			height: 50px;
			line-height: 50px;
			img {
				height: 30px;
				margin-left: 15px;
			}
		}
		.filmInfo-content {
			padding: 15px;
			.filmInfo-item {
				font-size: 1.5rem;
				display: flex;
				flex-direction: row;
				.item-left {
					color: #999;
					width: 50px;
				}
				.item-right {
					flex: 1;
				}
			}
		}
	}

	.slide-info-enter, .slide-info-leave-active {
		opacity: 0;
		transform: translateY(50px);
	}
</style>