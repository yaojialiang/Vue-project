<template>
    <div class="affirm">
        <div class="affirm-main">
            <ul class="header">
                <li> <router-link to="/carlist">&lt;</router-link></li>
                <li>确认订单</li> 
            </ul>
            <ul class="address">
                <li class="icon iconfont icon-address_icon"></li>
                <li>
                <router-link to="/littleswan" v-if="adrdata==null">选择地址</router-link>
                <router-link to="/littleswan" v-else>{{adrdata}}</router-link>
                </li>
                <li class="icon iconfont icon-youjiantou-01"></li>
            </ul>
            <div class="zhezhao1"></div>
            <ul class="store">
                <li class="icon iconfont icon-weibiaoti2fuzhi04"></li>
                <li>小天鹅官方商城</li>
            </ul>
            <ul class="hotList" v-for="(val,idx) in dataset">
                <li>
                    <div>
                        <img :src="dataset[idx].imgs[0]"/>
                    </div>
                    <div >
                        <p class="title">{{val.title}}</p>
                        <p class="model">
                        {{val.model}}
                       </p>
                        <p><input type="text" class="remai" value="品质315"/></p>
                        <p class="price">￥{{val.price}}.00 <span class="num">&times;{{val.qty}}</span></p>
                    </div>
                </li>   
            </ul>
            <div class="zhezhao1"></div>
            <ul class="information">
                <li>发票信息</li>
                <li>个人信息<span class="icon iconfont icon-youjiantou-01"></span></li>
            </ul>
            <ul class="coupon">
                <li>优惠卷</li>
                <li>无可用优惠卷</li>
            </ul>
            <ul class="voucher">
                <li>有优惠卷兑换码吗？</li>
                <li>去兑换</li>
            </ul>
            <ul class="words">
                <li>买家留言</li>
                <li>请勿填写和发票支付.支付相关信息</li>
            </ul>
            <ul class="summation">
                <li>
                    <span class="qty">共{{dataset.length}}件,</span>
                    <span class="addtotal">合计:￥{{allprice}}.00</span>
                </li>
            </ul>
            <ul class="manner">
                <li class="zhifubao" @click="zi">
                    支付宝
                </li>
                <li class="weixin">
                    微信
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import './affirm.scss'
    import http from '../../utils/httpclient.js'
    export default{
        data(){
            return{
                dataset:[],
                total:1,
                allprice:null,
                adrdata:null
            }
        },
        mounted(){
             if(window.localStorage.getItem('user')){
                var u=JSON.parse(window.localStorage.getItem('user'));
                http.get('carlist',{username:u.username}).then((res)=>{
                    this.dataset = res.data.data;
                    if(this.dataset.length>0){
                        var p = 0;
                        for(var i = 0;i<this.dataset.length;i++){
                            var totalprice = this.dataset[i].qty*this.dataset[i].price;
                            p+=totalprice*1;
                            console.log(p)
                        }
                            this.allprice =p;
                        }else{
                            this.allprice=0; 
                        }
                    if(window.localStorage.getItem('useradr')){
                        this.adrdata=window.localStorage.getItem('useradr');
                    }
                })
               
            }else{
                 this.$router.push({path:'/littleswanlogin'})
            }

           
        },
        methods:{
            Continueshop(){
                window.history.go(-1);
            },
            zi(){
                var u=JSON.parse(window.localStorage.getItem('user'));
                if(this.adrdata==null){
                    alert('请选择收货地址');
                }else{
                    http.get('delall',{username:u.username}).then((res)=>{
                        if(res.data.status){
                            alert('支付成功！');
                            this.$router.push({path:'/'});
                        }
                    })
                }
            }
            
        }

    }
</script>