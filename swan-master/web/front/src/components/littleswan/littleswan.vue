<template>
    <div class="littleswan">
        <ul class="header">
            <li><router-link to="affirm">&lt;</router-link></li>
            <li>地址选择</li>
        </ul>
        <div class="zhezhao1"></div>
        <ul class="group" v-for="(val,idx) in data">
            <li><input type="checkbox" @click="go(idx)"/></li>
            <li>
                <span>{{val.consignee}}</span><span>{{val.phone}}</span><span>{{val.address}}</span> <span>{{val.detaile}}</span>
            </li>
        </ul>

        <div class="zhezhao1"></div>
        <div class="newaddress"> <router-link to="/addSelect">添加新地址</router-link></div>
    </div>
</template>

<script type="text/javascript">
    import './littleswan.scss'
    import http from '../../utils/httpclient.js'
    export default{
        data(){
            return{
                data:[]
            }
        },
        methods:{
            go(idx){
                var str=this.data[idx].consignee+' '+this.data[idx].phone+' '+this.data[idx].address+' '+this.data[idx].detaile;
                window.localStorage.setItem('useradr',str);
                this.$router.push({path:'/affirm'});
            }
        },
        mounted(){
            if(window.localStorage.getItem('user')){
                http.get('useradr',{username:JSON.parse(window.localStorage.getItem('user')).username}).then((res) => {
                    if(res.data.status){
                        this.data=res.data.data;
                    }
                })
            }
        }
    }
</script>