import Vue from 'vue';
import App from './App.vue';

//引入懒加载组件
import VueLazyComponent from '@xunlei/vue-lazy-component'

Vue.use(VueLazyComponent)
//引入公共的样式
import rem from './getRem/getRem.js'
import './basescss/base.scss'

// import HomeComponent from './components/home/home.vue'
import router from './router/router.js'
import store from './vuex/store.js'
rem.rem();


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
