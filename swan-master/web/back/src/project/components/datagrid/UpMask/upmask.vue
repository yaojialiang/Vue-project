<template>
    <div id="base">
        <div id="mask">
           <h2 @click="s_h">&times;</h2>
           <table>
               <tr>
                <td>Title:</td><td><input type="text" v-model="sub.title" /></td>
                </tr>
                <tr>
                <td>Explain:</td><td><input type="text" v-model="sub.explain"/></td></tr>
                <tr>
                <td>Price:</td><td><input type="text" v-model="sub.price" /></td></tr>
                <tr>
                <td>Color:</td><td><input type="text" v-model="sub.color"/></td></tr>
                <tr>
                <td>Size:</td><td><input type="text" v-model="sub.size"/></td></tr>
                <tr>
                <td>Model:</td><td><input type="text" v-model="sub.model"/></td></tr>
                <tr>
                <td>Date:</td><td><input type="date" v-model="sub.date" /></td></tr>
                <tr>
                <td>kind:</td><td><select v-model="sub.kind">
                      <option value="guntong">滚筒</option>
                      <option value="imp">波轮</option>
                      <option value="drs" selected>干衣机</option>
                      <option value="dbc">双桶</option>
                      <option value="air">空调</option>
                      <option value="cust">定制机</option>
                      <option value="tog">洗衣一体</option>
                </select></td></tr>
                <tr><td>now:</td><td><select v-model="sub.dis">
                      <option value="index">主页</option>
                      <option value="big">大容量</option>
                      <option value="ve" selected>智能</option>
                </select></td></tr>
                <tr><td>首页图片：<td><input type="text" v-model="sub.url" /></td></td></tr>
           </table>
           <datelist @picData="getpic"></datelist>
           <input type="button" value="Sure" id="ins" @click="sur"/>
        </div>
        <pogou v-if="showgou" @showgou="gou"></pogou>
    </div>
</template>
<script type="text/javascript">
    import './upmask.scss';
    import $ from 'jquery';
    import datelist from '../../addGoods/updata/updata.vue'
    import axios from 'axios';
    import pogou from '../../pogou/pogou.vue';
    export default{
        data(){
            return{
                api:this.$store.state.common.baseurl,
                showgou:false
            }
        },
        props:['sub'],
        mounted(){
            var wid=(window.innerWidth-300)/2;
            var hei=(window.innerHeight-500)/2;
            $('#mask').css('left',wid).css('top',hei);
            window.onresize=function(){
                var wid=(window.innerWidth-300)/2;
                var hei=(window.innerHeight-500)/2;
                $('#mask').css('left',wid).css('top',hei);
            }
            if(this.sub.imgs){
                this.sub.imgs.forEach((item,idx) => {
                    console.log(item)
                    $('.chepic img').eq(idx).attr('src',item);
                });
            }
            
        },
        methods:{
            gou(){
                this.showgou=false;
                this.$emit('change');
            },
            s_h(){
                this.$emit('change')
            },
            sur(){
                
                axios.get(this.api+'upgoods',{params:this.sub}).then((res) => {
                    console.log(res);
                    this.showgou=true;

                })
            },
            getpic(res){
                console.log(666,this.sub.imgs);
                var api=this.$store.state.common.baseurl+'assets/';
                if(res){
                    this.sub.imgs=[];
                    res.forEach((item,idx) => {
                        this.sub.imgs.push(api+item.name)
                    })
                }
                
            }
        },
        components:{
            datelist,
            pogou
        }
    }
</script>