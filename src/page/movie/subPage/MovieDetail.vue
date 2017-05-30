<template>
	<!-- 注意这里的v-if， 渲染时等待数据到位 -->
	<div class="page" v-if="data.images">
		<!-- head -->
		<m-header fixed title="电影详情" class="page-header detail-header" :style="{background: dominant}">
			<div slot="left">
				<img @click="goBack" src="/static/images/ic_bar_back_white.png">
			</div>
		</m-header>
		<!-- body -->
		<div class="page-container movieDetail">
			<!-- thumb -->
			<div class="thumb" :style="{background: dominant}">
				<img class="thumb-img" :src="data.images.large">
			</div>
			<!-- movieInfo -->
			<div class="movieInfo" @click="showInfo">
				<div class="movieInfo-text">
					<h3 class="movieInfo-title">
						{{data.title}}
					</h3>
					<p class="movieInfo-directors">
						导演： 
						<span v-for="(item, index) in data.directors">
							{{item.name}} /
						</span>
					</p>
					<p class="movieInfo-casts">
						主演：
						<span v-for="(item, index) in data.casts">
							{{item.name}} /
						</span>
					</p>
				</div>
				<div class="movieInfo-rating">
					<span class="movieInfo-num">
						{{ data.rating.average }}
					</span>
					<div class="movieInfo-star">
						<m-star :num="data.rating.average" :isShow="false">
						</m-star>
					</div>
					<span class="movieInfo-count">
						{{data.ratings_count}} 人
					</span>
				</div>
			</div>
			<!-- Introduction -->
			<div class="movieIntro">
				<m-cell title='简介' size="large" class="movie-cell"></m-cell>
				<p class="movieIntro-content">
					<span class="isOpen">
						{{newSummary}}
					</span>
					<span class="movieIntro-open" @click="showAllSummary">
						{{isOpen?'< 隐藏':'打开 >'}}
					</span>
				</p>
			</div>
			<!-- cast -->
			<div class="movieCast">
				<m-cast :list="data.casts"></m-cast>
			</div>
		</div>
		<!-- MovieInfo -->
		<transition :name="transitionName">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import { Header } from 'mint-ui'
	import { getMovieDetail } from '@/router/api'
	import Star from '@/components/star'
	import Cast from '../movie-components/Cast'
	import RGBaster from 'rgbaster'
	import mCell from '@/components/cell'

	export default {
		components: {
			mHeader: Header,
			mStar: Star,
			mCast: Cast,
			mCell
		},
		data () {
			return {
				transitionName: 'slide-info',
				data: {},
				newSummary: '',
				dominant: '',
				isOpen: false
			}
		},
		created () {
			this.initData()
		},
		methods: {
			initData () {
				var id = this.$route.params.id
				var vm = this
				getMovieDetail(id).then((data) => {
					vm.data = data
					vm.getRgba(data.images.large)
					vm.summarySlice()
					vm.isOpen = false
				})
			},
			getRgba (url) {
				var vm = this
				var img = document.createElement('img')
				img.setAttribute('src', url)
				img.addEventListener('load', () => {
					RGBaster.colors(img, {
						exclude: [ // 排除黑白
							'rgb(255,255,255)',
							'rgb(0,0,0)'
						],
						paletteSize: 15, // 取前15个颜色
						success: function (payload) {
							vm.dominant = payload.dominant
							vm.setRgb(payload.dominant)
							console.log(payload)
						}
					})
				})
			},
			// 色域调和器
			setRgb(RGB){
			  var RgbValue = RGB.replace("rgb(", "").replace(")", "");
			  var RgbValueArry = RgbValue.split(",");
			  var grayLevel = RgbValueArry[0] * 0.299 + RgbValueArry[1] * 0.587 + RgbValueArry[2] * 0.114;
			  if (grayLevel >= 192) { 
				　　console.log(grayLevel+"浅色")
					for(var i=0;i<RgbValueArry.length;i++){
						RgbValueArry[i]=RgbValueArry[i]-70;
					}
			        this.dominant="rgb("+RgbValueArry[0]+","+RgbValueArry[1]+","+RgbValueArry[2]+")";
			  } else {
			  　　  console.log(grayLevel+"深色")
			  }
			},
			summarySlice () {
				var summary = this.data.summary
				var length = summary.length
				if(length > 70) {
					this.newSummary = summary.slice(0, 70) + '...'
				}
			},
			showAllSummary () {
				this.isOpen = !this.isOpen
				if(this.isOpen) {
					this.newSummary = this.data.summary
				} else {
					this.summarySlice()
				}
			},
			goBack () {
				this.$router.go(-1)
			},
			showInfo () {
				this.$router.push({ name: 'MovieInfo' })
			}
		},
		// 更改路由前获得新数据
		beforeRouteEnter (to, from, next) {
			getMovieDetail(to.params.id).then((data) => {
				next(vm => {
					vm.data = data
					vm.getRgba(data.images.large)
					vm.summarySlice()
					vm.isOpen = false
				})
			})
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/color.scss';
	.page-container {
		bottom: 0;
	}
	.detail-header {
		font-size: 16px;
		transition: all 1s ease;
		background: transparent;
		img {
			height: 30px;
		}
	}
	.thumb {
		height: 290px;
		box-sizing: border-box;
		padding: 20px;
		text-align: center;
		transition: all 1s ease;
		.thumb-img {
			height: 100%;
		}
	}
	.movieInfo {
		display: flex;
		flex-direction: row;
		padding: 25px 15px;
		border-bottom: 1px solid #e4e4e4;
		.movieInfo-text {
			flex: 1;
			h3 {
				font-size: 2.5rem;
				font-weight: bolder;
			}
		}
		.movieInfo-rating {
			height: 85px;
			width: 85px;
			margin-left: 50px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			box-shadow: 0 0 10px #ddd;
			.movieInfo-num {
				font-size: 2rem;
				font-weight: bolder;
			}
		}
		.movieInfo-directors, .movieInfo-casts {
			color: #999;
		}
	}
	.movieIntro-content {
		padding: 0 15px;
		font-size: 1.5rem;
	}
	.movieIntro-open {
		color: $defaultColor;
	}
</style>