<template>
    <div class="carsList">
        <div class="header">
            <router-link to="/"><i class="iconfont icon-zuojiantou"></i></router-link>
            购物车
        </div>
        <div class="address clearfix">
            <span class="pst"><i class="iconfont icon-04"></i>广州市天河区</span>

        </div>
        <div class="main">
            <div class="head">
                <div class="selectAll">
                    <input type="checkbox" v-if="ipt.length == dataset.length" checked @click="selectAll" key="'a'">
                    <input type="checkbox" v-else @click="selectAll" key="'b'">
                </div>
                <div class="iconfont icon-building_"><span>小天鹅官方商城</span></div>

            </div>
            <div class="carlist">
                <ul>
                    <li v-for="(val,idx) in dataset" v-on:click.stop="select(idx)">
                        <div class="cir">
                            <input type="checkbox" :checked="ipt.indexOf(idx)>-1">
                            <!-- <div :class="{active:ipt.indexOf(idx)}>-1" v-on:click="select(idx)"></div> -->
                        </div>
                        <div class="cont">
                            <div>
                                <img :src="dataset[idx].imgs[0]" />
                            </div>
                            <div>
                                <h3>{{val.title}}</h3>
                                <h4>{{val.color}}/{{val.size}}</h4>


                                <div class="qty">
                                    <p class="decrease" v-on:click.stop="decrease(idx)">-</p>
                                    <p>{{val.qty}}</p>
                                    <p class="increase" v-on:click.stop="increase(idx)">+</p>
                                </div>

                            </div>
                        </div>
                        <div class="par">
                            <p>¥{{val.price*val.qty}}.00</p>
                            <span>X{{val.qty}}</span>
                            <button @click.stop="del(idx)">删除</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="foot">
            <div>
                <input type="checkbox" v-if="ipt.length == dataset.length" checked @click="selectAll" key="a">
                    <input type="checkbox" v-else @click="selectAll" key="b">
                全选
            </div>
            <div>
                <p>合计：<span class="total" >¥{{allprice}}.00</span></p>
                <p>不含运费</p>
            </div>
            <div :class="{ac:allprice>0,account:true}"  @click="jiesuan">结算({{ipt.length}})</div>
        </div>
        <div class="zhezhao" v-if="show"></div>
        <div class="popover" v-if="show">
            <span class="btn-close" @click="close">&times;</span>
            <div>付款成功，点击跳转首页</div>
        </div>
    </div>
</template>


<script>
    import './carlist.scss'
    import '../../basescss/base.scss'

    import http from '../../utils/httpclient.js'
    
    import spinner from './spinner/spinner.vue'


    export default {
        data(){       //data:function(){} 是这种的简写
            return {
                show:false,
                active:false,
                dataset:[],
                ipt:[], //创建一个数组保存被选中的input
                allprice:null
            }
        },
        components:{
            spinner
        },
        mounted(){
            if(window.localStorage.getItem('user')){
                var u=JSON.parse(window.localStorage.getItem('user'));
                http.get('carlist',{username:u.username}).then((res)=>{
                    if(res.data.status){
                        this.dataset = res.data.data;
                    }
                    
                })
            }else{
                this.$router.push({path:'/littleswanlogin'})
            }
            
        },
        methods:{
            sel:function(){
                if(this.ipt.length>0){
                    var p=0;
                    for(var i=0;i<this.ipt.length;i++){
                        var totalprice=this.dataset[this.ipt[i]].qty*this.dataset[this.ipt[i]].price;
                        p+=totalprice;
                       
                    }
                    this.allprice=p;
                }else{
                    this.allprice=0;
                }
            },
            select:function(idx){
                if(this.ipt.indexOf(idx)>-1){  
                //点击事件select的时候，如果有indexOf返回的值>-1，返回的是当前的索引值，并且从数组中删除这一项
                    this.ipt.splice(this.ipt.indexOf(idx),1)  //如果ipt里面有就删除里面的的这一项
                }else{
                    this.ipt.push(idx);
                }   //单选
                this.sel()
            },
            selectAll:function(){
                if(this.ipt.length == this.dataset.length){
                    this.ipt =[]; //如果全部被选中就清空它
                }else{
                    this.ipt =[];  
                    //先清空ipt再循环一遍dataset把所有的都添加上去，以免还要判断哪个被选中哪个没有被选中
                    for(var i=0;i<this.dataset.length;i++){
                        this.ipt.push(i); //这里是把每一个下标push进去
                    }
                }   //全选
                 this.sel()
            },
            decrease:function(idx){
                var n=this.dataset[idx].qty;
                n--;
                if(n<1){
                    n=1;
                }
                this.dataset[idx].qty =n;   //数量减少
                this.sel()
                
            },
            increase:function(idx){     //数量增加
                this.dataset[idx].qty = this.dataset[idx].qty*1 + 1;
                this.sel();
                http.get('upcar',{_id:this.dataset[idx].id,qty:this.dataset[idx].qty}).then((res) => {
                    console.log(res);
                })
                
                
            },
            del:function(idx){     //点击删除
                
                    // 这是点击编辑删除全部的代码
                    var arr =[];
                    for(var i=0;i<this.dataset.length;i++){
                        if(this.ipt.indexOf(i)<0){
                            arr.push(this.dataset[i]);
                        }
                    }
                    this.dataset = arr;
                    this.ipt = [];
                 
                
                console.log(idx);
                this.dataset.splice(this.dataset[idx],1);

            },
            jiesuan:function(){
                if(this.allprice>0){
                    this.$router.push({path:'/affirm'})
                }
                
            },
            close:function(){
                this.show = false;

            },
            Continueshop(){
                window.history.go(-1);
            }
        }
    }


</script>


<style type="text/css">
    @import '../../font/iconfont.css'
</style>