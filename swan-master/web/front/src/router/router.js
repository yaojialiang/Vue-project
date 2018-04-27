import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomeComponent from '../components/home/home.vue'
import detailsComponent from '../components/details/details.vue'
import particularsComponent from '../components/details/particulars/particulars.vue'

import goodslistComponent from '../components/catalog/goodslist/goodslist.vue'
import guntongComponent from '../components/catalog/guntong/guntong.vue'
import bolunComponent from '../components/catalog/bolun/bolun.vue'
import ganyijiComponent from '../components/catalog/ganyiji/ganyiji.vue'
import xiganyitiComponent from '../components/catalog/xiganyiti/xiganyiti.vue'
import shuangtongComponent from '../components/catalog/shuangtong/shuangtong.vue'
import kongtiaoComponent from '../components/catalog/kongtiao/kongtiao.vue'
import dingzhijiComponent from '../components/catalog/dingzhiji/dingzhi.vue'
import RegisterComponent from '../components/register/register.vue'
import LittleswanloginComponent from '../components/login/littleswanlogin.vue'
import PersonalCenterComponent from '../components/personalcenter/personalcenter.vue'
import messageComponent from '../components/message/message.vue'
import searchComponent from '../components/search/search.vue'
import editNicknameComponent from '../components/message/editNickname/editNickname.vue'
import affirmComponent from '../components/affirm/affirm.vue'
import carlistComponent from '../components/carlist/carlist.vue'
import littleswanComponent from '../components/littleswan/littleswan.vue'
import addSelectComponent from '../components/addSelect/addSelect.vue'

const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'root',
            component:HomeComponent
        },
        {   
            path:'/details',
            name:'details',
            component:detailsComponent
        },
        {
            path:'/particulars',
            name:'particulars',
            component:particularsComponent
        },
        {
            path:'/goodslistComponent',
            component:goodslistComponent,
            children:[
                {path:'/guntong',component:guntongComponent},
                {path:'/bolun',component:bolunComponent},
                {path:'/ganyiji',component:ganyijiComponent},
                {path:'/xiganyiti',component:xiganyitiComponent},
                {path:'/shuangtong',component:shuangtongComponent},
                {path:'/kongtiao',component:kongtiaoComponent},
                {path:'/dingzhiji',component:dingzhijiComponent}
            ]
        },
        {
            path:'/search',
            name:'serach',
            component:searchComponent
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterComponent
        },
        {
            path: '/littleswanlogin',
            name: 'littleswanlogin',
            component: LittleswanloginComponent
        },
        {
            path: '/personalcenter',
            name:'personalcenter',
            component: PersonalCenterComponent
        },
        {
            path: '/message',
            name:'message',
            component: messageComponent
        },
        {
           path: '/editNickname',
           name:' editNickname',
           component: editNicknameComponent
        },
        {
           path: '/affirm',
           name:' affirm',
           component: affirmComponent
        },
        {
           path: '/carlist',
           name:' carlist',
           component: carlistComponent 
        },
        {
            path:'/littleswan',
            name:'littleswan',
            component:littleswanComponent
        },
        {
            path:'/addSelect',
            name:'addSelect',
            component:addSelectComponent
        }    
    ]
})
// 对将要进入的路由进行权判断
router.beforeEach((to, from, next) =>{
    // console.log(to.path);
    // if(to.name=='personalcenter' && window.localStorage.getItem('dbtoken')){
    //  next();
    // }else{
    //  router.replace('register');
    //  next();
    // }
    // if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('dbtoken')){
    //  router.replace('login');
    //  next();
    // } 
    // next();
    
    //进入个人页面时，先判断token存在与否，若不存在，则跳转到登陆页面
    if(to.path == '/personalcenter'){
        if(window.localStorage.getItem('user')){
            next();
        }else{
            router.push({path: '/littleswanlogin'});
        }
        
    }else{
        next();
    }
    
})

export default router;
