# 项目笔记


### Commit 1
使用Vue-cil创建项目
``` npm
$ vue init <template-name> <project-name>
```
设置默认配置


### Commit 2
1.安装依赖
* **vue-router:**				路由
* **vuex:**	 					状态管理
* **axios:**					网络请求
* **vue-axios:**				使vue和axios配合使用
* **mint-ui:**					UI
* **babel-plugin-component:**	安装后可使用import特性，动态引入mint-ui组件
* **node-sass:**				sass解析组件
* **sass-loader:**				sass
* **shell:**					加密组件
* **额外独立安装rgbaster、swiper于lib文件夹**

2.在.bablerc中设置bable-plugin-component

3.在webpack.base.conf.js中设置CSS和SASS的解析

4.在config/index中设置代理，将原本请求路径设置重写为/api
* [vuejs-templates](https://vuejs-templates.github.io/webpack/proxy.html)

5.向主页index.html添加viewport来适配移动端


## Commit 3
1.将静态资源都放在static下

2.创建总线样式文件index.scss，引入默认样式表(normaliz.scss)，main.js中加载总线样式文件

3.自定义一个loading组件

4.输出这个loading组件

``` javascript
const loading = require('./loading.vue') // 引入组件

module.exports = {
	install: function (Vue) { // 用Vue.use调用
		Vue.component('loading', loading) //.vue文件作为配置全局注册组件
	}
}
```

5.main.js中通过import引入loading，Vue.use调用它

6.loading组件的状态由Vuex统一管理

7.编写状态管理文件store.js
* mutations名字最好为常量
* [Vuex](https://vuex.vuejs.org/zh-cn/getting-started.html)

8.main.js中引入store.js并调用它

9.编写主页(App.vue)
* [内置的组件](https://cn.vuejs.org/v2/api/#内置的组件)
* transition过渡，keep-alive缓存，router-view路由显示

10.监听路由，改变过渡方向
* [路由信息对象](https://router.vuejs.org/zh-cn/api/route-object.html)


## Commit 4
1.确定页面的主题色，编写color.scss，总线样式文件中添加它

2.确定子页面和组件关系
``` npm
│  App.vue                                          主页组件
│  bus.js                                           非父子通讯组件组件
│  main.js                                          总线文件
│
├─assets
│  │  color.scss                                    颜色
│  │  index.scss                                    总线样式表
│  │  movieSubPage.scss                             电影排行样式表
│  │  normaliz.scss                                 默认样式表
│  │
│  └─images                                         静态图片
├─components
│  │  cell.vue                                      分割栏
│  │  hot-item.vue                                  热映/即上的影片内容单元
│  │  star.vue                                      评分组件
│  │  swipe.vue                                     滑动组件
│  │  tab-item.vue                                  选项卡单元
│  │  tab-wrap.vue                                  选项卡容器
│  │
│  └─loading
│          index.js                                 loading输出组件
│          loading.vue                              loading组件
│
├─data
│      diary.json                                   数据静态资源
│      homeData.json                                数据静态资源
│
├─lib
│  ├─rgbaster                                       颜色解析工具
│  │      rgbaster.js
│  │
│  └─swiper                                         滑动工具
│      ├─css
│      │      swiper.css
│      │      swiper.min.css
│      │
│      └─js
│          │  swiper.jquery.js
│          │  swiper.jquery.min.js
│          │  swiper.jquery.umd.js
│          │  swiper.jquery.umd.min.js
│          │  swiper.js
│          │  swiper.min.js
│          │
│          └─maps
│                  swiper.jquery.min.js.map
│                  swiper.jquery.umd.min.js.map
│                  swiper.min.js.map
│
├─page
│  ├─film                                            热映/即上页(属于电影页子页)
│  │  │  Film.vue                                       -页面容器
│  │  │
│  │  └─subPage
│  │          ComingSoon.vue                            -即将上映
│  │          InTheaters.vue                            -热映
│  │
│  ├─index                                           主页
│  │      Index.vue
│  │
│  ├─movie                                           电影页
│  │  │  Movie.vue                                      -页面容器
│  │  │
│  │  ├─movie-components
│  │  │      Cast.vue                                   -人员组件
│  │  │      MovieGroup.vue                             -电影页中热映/即上的组件
│  │  │      MovieRankGroup.vue                         -电影页中排行的组件
│  │  │      MovieSwipe.vue                             -电影页中的滑动组件
│  │  │
│  │  └─subPage                                      电影页子页面
│  │          MovieDetail.vue                           -电影详情
│  │          MovieInfo.vue                             -电影详情中的信息
│  │          New_movies.vue                            -新片排行
│  │          Top250.vue                                -Top250
│  │          Us_box.vue                                -票房排行
│  │          Weekly.vue                                -周排行
│  │
│  └─tab                                              选项卡
│          Tab.vue
│
├─router                                              路由
│      api.js                                            -请求API
│      index.js                                          -路由总线
│
└─store                                               状态
        mutation-type.js                                 -mutation静态名
        store.js                                         -状态管理
```
page文件中各页面引入的组件一目了然

3.编写选项卡Nav.vue
* Nav = Nav + tab + tab-item

4.知道index.html是主页面，底部是选项卡，主页内容用路由切换显示


## Commit 5- Commit 13

页面和组件的编写可参考上面项目目录，以下是一些知识点：
* 关于[swiper](http://www.swiper.com.cn/api/index.html)配置
* [过渡效果](https://cn.vuejs.org/v2/guide/transitions.html)需要知道包含关系，比如page->page + m-tab等。过渡的元素一定要绝对定位，否则就坑爹了。
* 由于首页数据是静态数据，需要自行引入，因此请求前在dev-server中设置静态路由以读取。
* [非父子组件通信](https://cn.vuejs.org/v2/guide/components.html#非父子组件通信)
* 注意api.js的编写，HOST+url
* 拦截器的使用，[axios](https://github.com/mzabriskie/axios)文档
* 关于为啥在不同组件中引用静态图的路径都是static/开头的问题可见dev-server.js
* Promise在请求中的使用
* 更改webpack.base.conf.js的alias来使外部组件能直接用import引入
* [rgbaster](https://github.com/briangonzalez/rgbaster.js)及[教程](http://www.zhangxinxu.com/wordpress/2014/08/image-dominant-color-get-rgbaster-js/)，注意色调调和器的使用
* [Vue](https://cn.vuejs.org/v2/guide/)教程