import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomeComponent from '../components/home/home.vue'
import StudentsComponent from '../components/goods/goods.vue'
import CnodejsComponent from '../components/cnodejs/cnodejs.vue'
import InsertComponent from '../components/addGoods/addGoods.vue'
import LonginComponent from '../components/login/login.vue'
const router = new VueRouter({
    routes: [
        {
            path: '/', 
            component: HomeComponent,
            children:[
                {   
                    name:'student',
                    path: '/goods', 
                    component: StudentsComponent
                },
                {
                    name:'con',
                    path: '/cnodejs', 
                    component: CnodejsComponent
                },

                {
                    name:'insert',
                    path:'/insertGoods',
                    component: InsertComponent
                },
            ]
        },{
            name:'login',
            path:'/login',
            component:LonginComponent
        }
    ]
})

export default router;