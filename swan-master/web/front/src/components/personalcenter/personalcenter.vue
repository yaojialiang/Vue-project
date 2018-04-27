<template>
    <div class="personalcenterbox">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <header>
            <a class='me'></a>
            <a class='qin'>亲爱的小天鹅会员</a>
        </header>

        <div class='order'>
            <div class='top'>
                <span>全部订单</span>
                <span>查看详情</span>  
                <i class='fa fa-angle-right'></i>  
            </div>

            <div class='bottom'>
                <a><i class='fa fa-credit-card'></i><p>待支付</p></a>
                <a><i class='fa fa-gift'></i><p>待发货</p></a>
                <a><i class='fa fa-truck'></i><p>待收货</p></a>
                <a><i class='fa fa-commenting-o'></i><p>评价管理</p></a>
                <a><i class='fa fa-cny'></i><p>退款/售后</p></a>
            </div>
        </div>

        <div class='collection'>
            <a class="left"><span>0</span><p>我的收藏</p></a>
            <a class="right"><span>0</span><p>优惠券</p></a>
        </div>

        <div class='help'>
            <div class='top'>帮助中心<i class='fa fa-question-circle'></i><i class='fa fa-angle-right'></i></div>
            <div class='bottom'>设置<i class='fa fa-gear'></i><i class='fa fa-angle-right'></i><span><router-link to="/message">账户设置,地址</router-link></span></div>
        </div>
        <div class="footer">
        <ul>
            <li><i class="icon iconfont icon-kefu"></i><span><router-link to="/">首页</router-link></span></li>
            <li><i class="icon iconfont icon-fenlei"></i><span><router-link to="/goodslistComponent">分类</router-link></span></li>
            <li><i class="icon iconfont icon-gouwuche"></i><span><router-link to="/carlist">购物车</router-link></span></li>
            <li><i class="icon iconfont icon-wode"></i><span>我的</span></li>
        </ul>
      </div>
    </div>
</template>

<script>
    import './personalcenter.scss'
    export default{

    }
</script>  