<template>
    <div id="T-set">
        <div class="T-header">
            <router-link to="/mine">
                <i class="fa fa-angle-left"></i>
            </router-link>
            <h3>设置</h3>
        </div>
        <div class="T-main">
            <ul>
                <li @click="edit">修改密码<i class="fa fa-pencil-square-o"></i></li>
                <li>联系我们<i class="fa fa-phone"></i></li>
                <li>版本检测<i class="fa fa-search"></i></li>
                <li>我要反馈<i class="fa fa-send-o"></i></li>
            </ul>
            <ul>
                <li>关于创业星<i class="fa fa-star-o"></i></li>
                <li @click="out">退出登录<i class="fa fa-sign-out"></i></li>
            </ul>
        </div>
        <updatepass v-if="passshow"></updatepass>
    </div>
</template>

<script type="text/javascript">
    import $ from "jquery";
    import http from '../../../utils/httpClient.js'
    import updatepass from './udatepass/updatepass.vue'
    import './set.scss'
    export default{
        data(){
            return{
                dataset:[],
                passshow:false
            }
        },
        components:{
            updatepass
        },
        methods:{
            edit(){//点击修改密码时
                console.log(666);
                this.passshow = true;
                
            },
            out(){//点击退出时
                console.log(888);
                window.sessionStorage.removeItem('xxtoken');
                window.sessionStorage.removeItem('userID');
                this.$router.push('/login');
            }
        },
        mounted(){
            // console.log(this.$children[1].edit());
        }
    }
</script>