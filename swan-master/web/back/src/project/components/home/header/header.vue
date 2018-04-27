<template>
    <div id="headbox">
        <h3>后台管理系统</h3>
        <div id="pos">
            <h5>操作者:<span id="use">{{user}}</span><a href="" @click.prevent="exit">退出</a></h5>
        </div>
    </div>
    
</template>

<script>
import './header.scss';
    export default {
        data(){
            return{
                user:'',
            }
        },
        mounted(){
            var data=JSON.parse(window.localStorage.getItem('user'));
            this.user=data.user;
        },
        methods:{
            exit(){
                window.localStorage.setItem('user','');
                this.$router.push({path:'/login'});
            }
        }
    }
</script>