<template>
    <div class="washer">
        <div id="header">
            <ul>
                <li><i class="icon iconfont icon-kefu"></i></li>
                <li><img src="../../assets/logo.jpg"></li>
                <li><router-link to="/search"><i class="icon iconfont icon-fangdajing"></i></router-link></li>
            </ul> 
        </div> 
        <div id="main">
            <div class="banner">
                 <slider :pages="pages" :sliderinit="sliderinit">
                        <!-- slot  -->
                </slider> 
            </div> 
            <div class="category">
                <ul>
                    <li><router-link to="/goodslistComponent"><img src="https://pic.mdcdn.cn/h5/pic/201705/h5分类图标1.png" /></router-link><span>滚筒洗衣机</span></li>
                    <li><router-link to="/goodslistComponent"><img src="https://pic.mdcdn.cn/h5/pic/201802/5a9375084844d.png?x-oss-process=image/format,webp/quality,Q_90&" /></router-link><span>波轮洗衣机</span></li>
                    <li><router-link to="/goodslistComponent"><img src="https://pic.mdcdn.cn/h5/pic/201705/h5分类图标.png" /></router-link><span>洗洪一体</span></li>
                    <li><router-link to="/goodslistComponent"><img src="https://pic.mdcdn.cn/h5/pic/201704/h5AA-03.png?x-oss-process=image/format,webp/quality,Q_90&" /></router-link><span>干衣机</span></li>
                </ul>
            </div>
            <div class="product">
                <product></product>
            </div> 
            <div class="zhezhao1"></div>
            <div class="recommend">
               <recommend></recommend>
            </div>
            <div class="zhezhao1"></div>
            <div class="capacity">
                <capacity></capacity>    
            </div>
            <div class="services">
                <ul>
                    <li><i class="icon iconfont icon-zhengpinbaozheng"></i><span>正品保证</span></li>
                    <li><i class="icon iconfont icon-tianmaoquanguolianbao"></i><span>全国联保</span></li>
                    <li><i class="icon iconfont icon-7tianwuliyoutuihuanhuo"></i><span>7天无理由退换</span></li>
                </ul>
            </div>
            <div class="connect">
                <ul>
                    <li>联系我们</li>
                    <li>服务政策</li>
                    <li>隐私条款</li>
                </ul>
            </div>
            <div class="copyright">
                <span>版权所有 © 无锡小天鹅股份有限公司|苏ICP备14025600号-1</span>
            </div>
        </div> 
     <!--    <div class="foot">
            <foot></foot>
        </div> --> 
      <div class="footer">
        <ul>
            <li><i class="icon iconfont icon-kefu"></i><span>首页</span></li>
            <li><i class="icon iconfont icon-fenlei"></i><span><router-link to="/goodslistComponent">分类</router-link></span></li>
            <li><i class="icon iconfont icon-gouwuche"></i><span><router-link to="/carlist">购物车</router-link></span></li>
            <li><i class="icon iconfont icon-wode"></i><span><router-link to="/personalcenter">我的</router-link></span></li>
        </ul>
      </div>
    </div> 
</template>

<script>
    import './home.scss'
    import product from './product/product.vue'
    import recommend from './recommend/recommend.vue'
    import capacity from './capacity/capacity.vue'
    import foot from './foot/foot.vue' 
    import slider from 'vue-concise-slider'// 引入slider组件

    export default {
        data (){
            return {
                pages:[
                  {
                    title: '',
                    style:{
                     background:'url(http://10.3.136.217:99/src/assets/banner1.png)'
                    }
                  },
                  {
                   title: '',
                   style:{
                    background:'url(http://10.3.136.217:99/src/assets/banner2.png)'
                    }
                  },
                  {
                   title: '',
                   style:{
                    background:'url(http://10.3.136.217:99/src/assets/banner3.png)'
                    }
                  },
                  {
                   title: '',
                   style:{
                    background:'url(http://10.3.136.217:99/src/assets/banner4.png)'
                    }
                  }
                ],
                //滑动配置[obj]
                sliderinit: {
                  currentPage: 0,//当前页码
                  thresholdDistance: 500,//滑动判定距离
                  thresholdTime: 100,//滑动判定时间
                  autoplay:3000,//自动滚动[ms]
                  loop:true,//循环滚动
                  direction:'horizontal',//方向设置，垂直滚动
                  infinite:1,//无限滚动前后遍历数
                  slidesToScroll:1,//每次滑动项数
                }
            }
        },
        components: {
            slider,
            product,
            foot,
            recommend,
            capacity
        } 
    }
</script>  
