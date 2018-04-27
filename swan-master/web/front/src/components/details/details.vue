<template>
  <div class="details">
      <ul class="details-header" v-for="val in data">
          <!-- <li @click="Continueshop()">&lt;</li> -->
         <li><router-link to="/">&lt;</router-link></li>
         <li>
              <span>商品</span>
              <span @click="toDetails(val._id)">详情</span>
              <span>评价</span>
         </li>
         <li class="icon iconfont icon-fenxiang2"></li>
     </ul>
     <div class="details-main">
          <div class="swiper-slide">
              <ul v-for="val in data">
                  <li><img :src="val.imgs[0]"/></li>
              </ul>
           <!--     <slider :pages="pages" :sliderinit="sliderinit"> -->
                        <!-- slot  -->
             <!--  </slider> -->
          </div>
          <ul class="item_info" v-for="val in data">
              <li class="item_name">{{val.title}}</li>
              <li class="item_word">{{val.explain}}</li>                      
              <li class="item_price">
                  <span>￥{{val.price}}.00</span>
                  <span class="repertory">库存43</span>                    
              </li>
          </ul>
          <ul class="stages">
              <li>分期</li>
              <li>该商品最高可享6期免息</li>
              <li class="icon iconfont icon-down" @click = "isShow"></li>
          </ul>
          <ul class="promotion_detail" v-if="show">
              <li>
                <span>￥1733.00*3期</span>
                <span style="color:#f90;">0手续费</span>
              </li>
              <li>
                <span>￥866.50*6期</span>
                <span style="color:#f90;">0手续费</span>
              </li>
              <li>
                <span>￥465.74*12期</span>
                <span>含手续费</span>
              </li>
          </ul>
          <ul class="server">
              <li>
                <span style="color:#C4C4C4;">服务</span>
                <span>
                    <i class="icon iconfont icon-xuanzhong"></i>
                    <span>小天鹅唯一官方商城</span>
                </span>
                <span>
                    <i class="icon iconfont icon-xuanzhong"></i>
                    <span>全国联保</span>
                </span>
              </li>
              <li>
                   <i class="icon iconfont icon-xuanzhong"></i>
                   <span>全场包邮</span>
              </li>
          </ul>
          <div class="zhezhao1"></div>
          <ul class="sendTo">
              <li>送至</li>
              <li>广东省广州市荔湾区</li>
              <li>有货</li>
          </ul>
          <ul class="itemColor" v-for="val in data">
              <li>颜色</li>
              <li>{{val.color}}</li>
          </ul>
          <ul class="itemSpecification" v-for="val in data">
              <li>规格</li>
              <li>{{val.size}}</li>
          </ul>
          <ul class="itemQuantity">
              <li>数量</li>
              <li>
                  <button class="jianhao" @click="jian">-</button>
                  <input type="text" class="num" v-model="total"/>
                  <button class="jianhao" @click="add">+</button>
              </li>
          </ul>
          <div class="zhezhao1"></div>
          <ul class="parameter">
              <li>产品参数</li>
              <li class="icon iconfont icon-down" @click = "isShow2"></li>
          </ul>
          <div class="spec_wrap">
              <ul v-if="show2" v-for="val in data">
                  <h4>产品信息</h4>
                  <li><span>品牌</span><span style="margin-left:200px;">Littleswan/小天鹅</span></li>
                  <li><span>颜色</span><span style="margin-left:200px;">{{val.color}}</span></li>
                  <li><span>上市日期</span><span style="margin-left:150px;">{{val.date}}</span></li>
                  <li><span>产品型号</span><span style="margin-left:150px;">{{val.model}}</span></li>
                  <li><span>电源电压（V）</span><span style="margin-left:88px;">220</span></li>
                  <li><span>额定功率（W）</span><span style="margin-left:77px;">1800</span></li>
              </ul>
          </div>
          <div class="zhezhao1"></div>
          <ul class="support">
              <li>服务支持</li>
              <li class="icon iconfont icon-down" @click="isShow3"></li>
          </ul>
          <div class="spec_wrap2">
                <ul v-if="show3">
                    <li><img src="//pic.mdcdn.cn/h5/img/detail/service/H5_LS_60_01.jpg?x-oss-process=image/format,webp/quality,Q_90&t=171019"/></li>
                    <li><img src="//pic.mdcdn.cn/h5/img/detail/service/H5_LS_60_02.jpg?x-oss-process=image/format,webp/quality,Q_90&t=171019" alt="" /></li>
                    <li><img src="//pic.mdcdn.cn/h5/img/detail/service/H5_LS_60_03.jpg?x-oss-process=image/format,webp/quality,Q_90&t=171019" alt="" /></li>
                    <li><img src="//pic.mdcdn.cn/h5/img/detail/service/H5_LS_60_04.jpg?x-oss-process=image/format,webp/quality,Q_90&t=171019" alt="" /></li>
                    <li><img src="//pic.mdcdn.cn/h5/img/detail/service/H5_LS_60_05.jpg?x-oss-process=image/format,webp/quality,Q_90&t=171019" alt="" /></li>
                </ul>
          </div>
          <div class="zhezhao1"></div>
          <div class="mod_detail">
              <img src="//pic.mdcdn.cn/h5/img/module/ls_logo_60x60.png?x-oss-process=image/format,webp/quality,Q_90&" alt="" />
              <span>小天鹅官方商城</span>
              <button class="btn_shop"><router-link to="/">返回商城</router-link></button>
          </div>
          <div class="zhezhao1"></div>
          <div class="detail_info_line">
              <h3>你可能会喜欢</h3>
          </div>
          <ul class="product">
              <li>
                <img src="//pic.mdcdn.cn/ImageStore/145191/pic/40b6247f35d2ca09A18703/40b6247f35d2ca09A18703_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&" />
                  <p class="desc">TB80-6288WDCLG</p>
                  <p class="name">
                  8KG变频 洗干一体 TD80-1411DG</p>
                  <p class="price">￥3499.00</p>
              </li>
              <li>
                <img src="https://img.mdcdn.cn/ImageStore/113201/pic/fac7f3ccaee93bd3A2733/fac7f3ccaee93bd3A2733_280*280.jpg" />
                  <p class="desc">TB80-6288WDCLG</p>
                  <p class="name">
                  8KG变频 洗干一体 TD80-1411DG</p>
                  <p class="price">￥3499.00</p>
              </li>
          </ul>

          <div class="examine" v-for="val in data">
              <button @click="toDetails(val._id)">点击查看图文详情</button>
          </div>
     </div>
     <div class="details-foot">
              <ul class="foot-l">
                  <li>
                     <i class="icon iconfont icon-shoucang"></i>
                     <span>收藏</span>
                  </li>
                  <li>
                      <i class="icon iconfont icon-gouwuche"></i>
                      <span>购物</span>
                  </li>
                  <li>
                      <i class="icon iconfont icon-kefu"></i>
                      <span>客服</span>
                  </li>
              </ul>
              <ul class="foot-r">
                  <li>
                     <span @click.stop="addgoods" >加入购物车</span>
                  </li>
                  <li>
                      <span>立即购买</span>
                  </li>
              </ul>
     </div>
     <div class="zhezhao2" v-if="show4"></div>
     <div class="pop-up" v-if="show4">
       <div class="pop-top">
            添加成功!
       </div>
       <ul class="pop-bottom">
            <li @click="Continueshop">继续购物</li>
            <li><router-link to="/carlist">去结算</router-link></li>
       </ul>
     </div>
     <!-- <spinner v-if="show4"></spinner> -->
  </div>

</template>

<script type="text/javascript">
    import './details.scss'
    import axios from 'axios'
    import slider from 'vue-concise-slider'
    import spinner from '../spinner/spinner.vue'
    import http from '../../utils/httpclient.js'
    export default {
      data(){
        return{
          show:false,
          show2:false,
          show3:false,
          show4:false,
          api:this.$store.state.common.baseurl,
          data:[],
          total:1
        }
      },
      components:{
        spinner
      },
      mounted(){
        var id = this.$route.query.id;
        http.get('det',{_id:id}).then(
                (res) => {
                  this.data= res.data.data;
                  // console.log(this.data); 
                })
      },
      methods:{
        isShow:function(){
          this.show = !this.show;
        },
        isShow2:function(){
          this.show2 = this.show2 == true ? false : true;
        },
        isShow3:function(){
          this.show3 = this.show3 == true ? false : true;
        },
        add:function(){
          this.total+=1;
        },
        jian:function(){
          var n=this.total;
          n--;
          if(n<1){
            n=1;
          }
          this.total=n;
        },
        addgoods(){
            var ren=window.localStorage.getItem('user')
          if(ren){
            this.show4=true;
            ren=JSON.parse(ren);
            http.get('addcar',{username:ren.username,qty:this.total,id:this.data[0]._id}).then((res) => {
              console.log(res);
            })
          }else{
              this.$router.push({path:'/littleswanlogin'});
          }
        },
        toDetails(id){
            this.$router.push({path:'/particulars',query: {id: id}})
        },
        Continueshop(){
          this.show4 = false;
            // window.history.go(-1);
        }
      }
    }
</script>
