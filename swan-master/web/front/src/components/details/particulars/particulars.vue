<template>
    <div class="particulars">
        <ul class="details-header" v-for="val in data">
            <li @click="toDetails(val._id)">&lt;</li>
            <li>
                  <span @click="toDetails(val._id)">商品</span>
                  <span>详情</span>
                  <span>评价</span>
            </li>
            <li class="icon iconfont icon-fenxiang2"></li>
        </ul>
        <div class="Particularsmain">
                <img class="particularsIMG" src="//pic.mdcdn.cn/ImageStore/145705/detail/ed6e242756dbf6deA25816/ed6e242756dbf6deA25816_790*_50.jpg?x-oss-process=image/format,webp/quality,Q_90&" alt="" />
                <img class="particularsIMG" src="//pic.mdcdn.cn/ImageStore/145705/detail/edef46cf01079984A24412/edef46cf01079984A24412_790*_50.jpg?x-oss-process=image/format,webp/quality,Q_90&" alt="" />
                <img class="particularsIMG" src="//pic.mdcdn.cn/ImageStore/145705/detail/cd416ccce98984f1A30248/cd416ccce98984f1A30248_790*_50.jpg?x-oss-process=image/format,webp/quality,Q_90&" alt="" />
                <img src="//pic.mdcdn.cn/ImageStore/145705/detail/10862cf358aca2f1A10548/10862cf358aca2f1A10548_790*_50.jpg?x-oss-process=image/format,webp/quality,Q_90&" alt="" />
                <img src="//pic.mdcdn.cn/ImageStore/145705/detail/0ef75f43026607b9A14950/0ef75f43026607b9A14950_790*_50.jpg?x-oss-process=image/format,webp/quality,Q_90&" alt="" />
                <img src="//pic.mdcdn.cn/ImageStore/145705/detail/39632008debb3eadA25154/39632008debb3eadA25154_790*_50.jpg?x-oss-process=image/format,webp/quality,Q_90&" alt="" />
                <img src="//pic.mdcdn.cn/ImageStore/145705/detail/c5a7200dfd2f2a39A8635/c5a7200dfd2f2a39A8635_790*_50.gif" alt="" />
                <img src="//pic.mdcdn.cn/ImageStore/145705/detail/38fb5f3ee9297268A17243/38fb5f3ee9297268A17243_790*_50.jpg?x-oss-process=image/format,webp/quality,Q_90&" alt="" />
                <img src="//pic.mdcdn.cn/ImageStore/145705/detail/19f1e6d79a47f0eeA17717/19f1e6d79a47f0eeA17717_790*_50.gif" alt="" />
                <img src="//pic.mdcdn.cn/ImageStore/145705/detail/082615947caa5b14A13453/082615947caa5b14A13453_790*_50.gif" alt="" />
                <img src="//pic.mdcdn.cn/ImageStore/145705/detail/f799ac92ce548f67A14951/f799ac92ce548f67A14951_790*_50.jpg?x-oss-process=image/format,webp/quality,Q_90&" alt="" />
                <img src="//pic.mdcdn.cn/ImageStore/145705/detail/88b92e8ce32fe5b3A14948/88b92e8ce32fe5b3A14948_790*_50.jpg?x-oss-process=image/format,webp/quality,Q_90&" alt="" />
                <img src="//pic.mdcdn.cn/ImageStore/145705/detail/ed3b8cdcbc3307fcA29227/ed3b8cdcbc3307fcA29227_790*_50.jpg?x-oss-process=image/format,webp/quality,Q_90&" alt="" />
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
                     <span>加入购物车</span>
                  </li>
                  <li>
                      <span>立即购买</span>
                  </li>
              </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    import './particulars.scss'
    import http from '../../../utils/httpclient.js'
    export default {
      data(){
          return{
            api:this.$store.state.common.baseurl,
            data:[]
          }
      },
      mounted(){
        var id = this.$route.query.id;
        http.get('det',{_id:id}).then(
                (res) => {
                  console.log(res);
                  this.data= res.data.data;
                })
      },
      methods:{
        toDetails(id){
          this.$router.push({path:'/details',query: {id: id}})
        }
      }
    }
</script>   