<template>
    <div class="classify">
        <div class="header">
            <lqheader></lqheader>
        </div>
        <div class="body">
            <div class="nav">
                <lqnav></lqnav>
            </div>
            <div class="container">
                <h3>热门单品</h3>
                <router-view></router-view>
            </div>
        </div>
      <!--   <div class="footer">
            <lqfooter></lqfooter>
        </div> -->
        <div class="footer">
            <ul>
                <li><i class="icon iconfont icon-kefu"></i><span><router-link to="/">首页</router-link></span></li>
                <li><i class="icon iconfont icon-fenlei"></i><span>分类</span></li>
                <li><i class="icon iconfont icon-gouwuche"></i><span><router-link to="/carlist">购物车</router-link></span></li>
                <li><i class="icon iconfont icon-wode"></i><span><router-link to="/personalcenter">我的</router-link></span></li>
            </ul>
      </div>
    </div>
</template>


<script>
    
    import './goodslist.scss'
    import lqnav from './nav/nav.vue'
    import lqheader from './header/header.vue'
    import lqfooter from './foot/foot.vue'


    export default {
        components:{
            lqnav,
            lqheader,
            lqfooter
        }
    }
</script>

//在这公共部分引入字体图标的css文件
<style type="text/css">
    @import '../../../font/iconfont.css';
</style>