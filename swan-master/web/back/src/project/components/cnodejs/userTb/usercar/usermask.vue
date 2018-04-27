<template>
    <div id="base">
        <div id="mask">
           <h2 @click="s_h">&times;</h2>
           <div id="datalist">
                <ul >
                   <li v-for="(val,idx) in dataset" :class="{ccc:status.indexOf(idx)>-1}" @click.stop="check(idx)">
                   <img :src="val.imgs[0]" alt="" />
                   <p>{{val.model}}</p>
                    <p>￥{{val.price}}<span>&nbsp;&nbsp;数量：{{val.qty}}</span></p>
                    <input type="button" value="Del" class="del" @click.stop="delsh(idx)"/>
                    <input type="checkbox" name="del" id="check" @click.stop="check(idx)" :checked="status.indexOf(idx)>-1" />
                   </li>
                </ul>
           </div>
           <p class="pri">总价格：{{total}}￥</p>
           <a href="" id="tdel" @click.prevent="tdel">删除选中</a>
           <div class="all">
               <span>全选：</span><input type="checkbox" name="del" id="allcheck" @click="alld" :checked="status.length==dataset.length" />
           </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import './usercar.scss';
    import $ from 'jquery';
    import axios from 'axios';
    import http from '../../../../utils/httpclient.js'
    export default{
        data(){
            return{
                api:this.$store.state.common.baseurl,
                dataset:[],
                total:null,
                status:[],
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
            var username=this.sub.username;
            axios.get(this.$store.state.common.baseurl+'carlist',{params:{username}}).then((res) => {
                this.dataset=res.data.data;
                this.dataset.forEach((val,idx) => {
                    this.total=this.total+val.price*1;
                })
            })

        },
        methods:{
            s_h(){
                this.$emit('change')
            },
            check(idx){
                console.log(idx);
                if(this.status.indexOf(idx)>-1){
                    this.status.splice(this.status.indexOf(idx),1);
                }else{
                    this.status.push(idx);
                }
            },
            alld(){
                var n=this.dataset.length;
                if(n==this.status.length){
                    this.status=[];
                }else{
                    this.status=[];
                    for(var i=0;i<n;i++){
                        this.status.push(i);
                    }
                }
            },
            tdel(){
                if(this.status.length<1){
                    alert('没有选择商品')
                }else{
                    this.status.forEach((val,idx) => {
                        this.dataset.splice(val,1);
                    })
                }
            },
            delsh(idx){
                console.log(this.dataset[idx]);
                http.get('delcar',{_id:this.dataset[idx].id}).then((res) => {
                    if(res.data.status){
                        this.dataset.splice(idx,1);
                    }else{
                        alert('不能删除')
                    }
                })
                console.log(this.dataset[idx]);
                
            }
        },
        components:{
          
        }
    }
</script>