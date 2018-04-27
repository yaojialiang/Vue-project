<template>
    <div id="base">
        <div id="mask">
        <h2 @click="s_h">&times;</h2>
        <h3 id="h3">编辑收货地址</h3>
        <ul id="adrlist">
            <li v-for="(item,idx) in data" @click="adr(idx)">
                <span v-for="(val,key) in item" v-if="key!='_id'&&key!='username'">{{val}}&nbsp;&nbsp;</span>
                <input type="button" value="删除" id="adrdel" @click.stop="adrdel(idx)"/>
            </li>
        </ul>
        <table id="checktb" v-if="show">
            <tr>
                <td>收货人：</td><td><input type="text" name="" id="" v-model="nowadr.consignee" /></td>
            </tr>
            <tr>
                <td>电话：</td><td><input type="text" name="" id="" v-model="nowadr.phone" /></td>
            </tr>
            <tr>
                <td>收货地址：</td>
                <td>
                    <linkage @select="sel"></linkage>
                </td>
            </tr>
            <tr>
                <td>详细地址：</td><td><textarea name="" id="" cols="30" rows="5" v-model="nowadr.detaile"></textarea></td>
            </tr>
            <tr><td></td><td><input type="button" value="确定" class="userch" @click="useraddadr" /></td></tr>
        </table>
        </div>
         <pogou v-if="showgou" @showgou="gou"></pogou>
         <popup v-if="showpop" @showset="popp" :sub="nowdata"></popup>
    </div>
</template>
<script type="text/javascript">
    import $ from 'jquery';
    import './usercheck.scss'
    import linkage from './linkage/linkage.vue'
    import http from '../../../../utils/httpclient.js'
    import pogou from '../../../pogou/pogou.vue'
    import popup from '../../../popup/popup.vue'
    export default{
        data(){
            return{
                data:[],
                show:false,
                nowadr:null,
                showgou:false,
                showpop:false,
                nowdata:null
            }
        },
        components:{
            linkage,
            pogou,
            popup
        },
        methods:{
            s_h(){
                this.$emit('changec');
            },
            adr(idx){
                this.nowadr=this.data[idx]
                this.show=!this.show;
            },
            useraddadr(){
                this.showgou=true;
                http.get('upadr',this.nowadr).then((res) => {
                    console.log(res);
                })

            },
            sel(data){
                var address=`${data.pro.name},${data.city.name},${data.county.name}`;
                this.nowadr.address=address;
            },
            gou(){
                this.showgou=false;
                this.$emit('changec');
            },
            popp(n){
                this.showpop=false;
                if(n){
                    this.data.splice(n,1);
                }
            },
            adrdel(idx){
                this.nowdata={
                    api:'deladr',
                    data:{
                        _id:this.data[idx]._id
                    },
                    idx:idx
                }
                this.showpop=true;
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
            http.get('useradr',{username:this.sub.username}).then((res) => {
                if(res.data.status){
                    this.data=res.data.data;
                }else{
                    alert('错误')
                }
               
            })
        }
    }
</script>