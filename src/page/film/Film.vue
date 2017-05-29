<template>
	<div class="page">
		<!-- head -->
		<m-header fixed title="院线电影" class="page-header">
			<router-link :to="{name:'Movie'}" slot="left">
				<img src="/static/images/ic_bar_back_green.png">
			</router-link>
		</m-header>
		<!-- tab+body -->
		<div class="page-container">
			<!-- tab -->
			<div class="nav">
				<div class="nav-item">
					<router-link active-class="active" :to="{ name: 'InTheaters'}" tag="a">
						正在热映
					</router-link>
				</div>
				<div class="nav-item">
					<router-link active-class="active" :to="{ name: 'ComingSoon'}" tag="a">
						即将上映
					</router-link>
				</div>
			</div>
			<!-- body -->
			<transition :name="transitionName">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
		</div>
	</div>
</template>

<script>
	import { Header } from 'mint-ui'

	export default {
		components: {
			mHeader: Header,
		},
		data () {
			return {
				transitionName: 'slide-right'
			}
		},
		watch: {
			'$route' (to, from) {
				if(to.name == 'InTheaters') {
					this.transitionName = 'slide-right'
				} else {
					this.transitionName = 'slide-left'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/color.scss';

	.page-header {
		background: white;
		color: black;
		img {
			height: 20px;
		}
	}

	.nav {
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		position: fixed;
		top: 50px;
		left: 0;
		right: 0;
		z-index: 2;
		&:before {
			content: '';
			width: 100%;
			position: absolute;
			height: 1px;
			background: $line;
		}
		.nav-item {
			height: 100%;
			flex: 1;
			a {
				display: block;
				width: 100%;
				height: 100%;
				color: black;
				line-height: 40px;
				background: white;
				&.active {
					color: $defaultColor;
					border-bottom: 2px solid $defaultColor;
				}
			}
		}
	}
</style>