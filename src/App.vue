<template>
  <div id="app">
    <!--自定义组件loading-->
    <loading v-if="$store.state.loading"></loading>
    <!--内容过度和缓存-->
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left' // 默认左滑动
    }
  },
  watch: {
    '$route' (to, from) { // 监听路由长短，判断滑动方向
      const toLength = to.path.split('/').length
      const fromLength = from.path.split('/').length
      this.transitionName = toLength < fromLength ? 'slide-right' : 'slide-left'
    }
  }
}
</script>
