<template>
	<div class="page">
		<!--载入并缓存分页内容-->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<!--m-tab + m-tab-item 组合导航栏-->
		<m-tab>
			<m-tab-item path="Index">
				<!--slot内容分发-->
				<img src="../../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
				<img src="../../assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
				<span slot="icon-text">首页</span>
			</m-tab-item>
			<m-tab-item path="Index">
				<img src="../../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
				<img src="../../assets/images/ic_tab_subject_active.png" alt="" slot="icon-active">
				<span slot="icon-text">电影</span>
			</m-tab-item>
		</m-tab>
	</div>
</template>

<script>
	import mTab from '../../components/tab-wrap'
	import mTabItem from '../../components/tab-Item'

	export default {
		name: 'Tab',
		components: {
			mTab,
			mTabItem
		}
	}
</script>