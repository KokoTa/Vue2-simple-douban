import Vue from 'vue'
import Vuex from 'vuex'
import { SHOW_LOADING, HIDE_LOADING } from './mutation-type'
Vue.use(Vuex)

// 保存载入状态
const state = {
	loading: false
}
const getters = {

}
const mutations = { // 改变状态
	[SHOW_LOADING] (state) {
		state.loading = true
	},
	[HIDE_LOADING] (state) {
		state.loading = false
	},
}
const actions = { // 异步请求判断是否改变状态
	hideLoading: ({ commit }) => {
		commit(HIDE_LOADING)
	},
	showLoading: ({ commit }) => {
		commit(SHOW_LOADING)
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})