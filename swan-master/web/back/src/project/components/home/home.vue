<template>
    <div>
        <div class="header">
            <dkheader></dkheader>
        </div>
        <div class="body">
            <div class="nav">
                <dknav></dknav>
            </div>
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import './home.css'

    import dknav from './nav/nav.vue'
    import dkheader from './header/header.vue'

    export default {
        components: {
            dknav,
            dkheader
        },
        mounted(){
            if(!window.localStorage.getItem('user')){
                this.$router.push({path:'/login'});
            }
        }
    }
</script>
<style type="text/css">
    @import '../../font/iconfont.css';
</style>