const loading = require('./loading.vue')

module.exports = {
	install: function (Vue) {
		Vue.component('loading', loading) //.vue文件作为配置全局注册组件
	}
}