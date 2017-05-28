<template>
	<div class="star">
		<span v-for="(item, index) in starNum">
			<img v-if="item == 1" src="/static/images/rating_star_small_on.png" alt="">
			<img v-else class="star-img" src="/static/images/rating_star_small_off.png" alt="">
		</span>
		<span class="mark">{{ num }}</span>
	</div>
</template>

<script>
	export default {
		props: {
			num: {
				type: Number,
				default: 0
			}
		},
		computed: {
			starNum () {
				let num = Math.ceil(this.num) / 2 //向上取整
				let arr =[]
				for(let i=0; i<5; i++) {
					if (i<num) {
						arr.push(1)
					} else {
						arr.push(0)
					}
				} 
				return arr
			}
		}
	}
</script>

<style lang="scss">
	.star img {
		width: 12px;
		height: 12px;
	}
	.star .mark {
		color: #999;
		font-size: 1rem;
		font-weight: normal;
	}
</style>