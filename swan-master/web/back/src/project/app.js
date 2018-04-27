import './common/common.css'
import './libs/bootstrap/bootstrap-4.0.0-alpha/dist/css/bootstrap.min.css'

import Vue from 'vue'

import store from './vuex/store.js'
import router from './router/router'
import app from './components/com/com.vue'

new Vue({   
    el: '#app',
    router,
    store,
    render: h => h(app)
})