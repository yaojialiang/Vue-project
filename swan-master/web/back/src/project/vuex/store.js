/* 
* @Author: Marte
* @Date:   2018-03-13 10:06:45
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-13 10:43:35
*/

import Vue from 'vue'
import Vuex from 'vuex'

import common from "../common/commstore.js"

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        common
    }
})
export default store;