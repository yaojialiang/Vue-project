<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" @click="s_h"><i class="icon iconfont icon-xiyiji"></i><router-link to="/goods">全部商品</router-link></li>
            <li class="list-group-item s_h" v-if="show">
                <router-link to="/insertGoods">添加商品</router-link>
            </li>
            <li class="list-group-item">
                <i class="icon iconfont icon-xiyiji3"></i>
                <router-link to="/cnodejs">用户管理</router-link>
            </li>
            <li class="list-group-item">
                <i class="icon iconfont icon-xiyiji4"></i>
                <a href="" @click.prevent="setting">设置</a>
            </li>
            <li id="dor" v-if="showdor">
                <a href="">修改密码</a>
            </li>
            <li class="list-group-item"><i class="icon iconfont icon-xiyiji5"></i><a href="" @click.prevent="exit">退出系统</a></li>
        </ul>    
    </div>
</template>

<script>
import './nav.scss'
    export default {
        data(){
            return {
                show:false,
                showdor:false
            }
        },
        methods:{
            s_h:function(){
                this.show=!this.show;
            },
            setting:function(){
                this.showdor=!this.showdor;
            }
        }
    }
</script>