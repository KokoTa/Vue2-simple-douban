<template>
	<div class="film-wrap">
		<ul class="film">
			<li class="film-item" v-for="(item, index) in data">
				<img :src="item.images.small" class="pic">
				<div class="film-item-content">
					<h3>{{ item.title }}</h3>
					<m-star :num="item.rating.average"></m-star>
					<p class="director">导演：<span v-for="director in item.directors"> {{ director.name }} /</span></p>
					<p class="cast">主演：<span v-for="cast in item.casts"> {{ cast.name }} /</span></p>
					<p class="looker">{{ item.collect_count }}人看过</p>
				</div>
				<div class="film-item-right">
					<router-link :to="{name: 'MovieDetail', params: {id: item.id}}" tag="a" class="btn">
						详情
					</router-link>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import star from '@/components/star'
	import { getComingSoon } from '@/router/api'

	export default {
		components: {
			mStar: star
		},
		data () {
			return {
				data: {}
			}
		},
		created () {
			this.initData()
		},
		methods: {
			initData () {
				getComingSoon().then((data) => {
					this.data = data.subjects
				})
			}
		}
	}
</script>