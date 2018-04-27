<template>
    <div class="addselect">
        <ul class="header">
            <li><router-link to="/littleswan">&lt;</router-link> </li>
            <li>地址选择</li>
        </ul>
        <ul class="delivery">
            <li>收货人</li>
            <input type="text" placeholder="请输入收货人姓名" v-model="data.consignee"/>
        </ul>
         <ul class="addname">
            <li>联系电话</li>
            <input type="text" placeholder="请输入收货人联系电话" v-model="data.phone"/>
        </ul>
        <ul class="adr">
            <li>地址</li>
            <li><linkage @select="linkage"></linkage></li>
        </ul>
        <ul class="phone">
            <li>详细地址</li>
            <input type="text" placeholder="请输入收货人详细地址" v-model="data.detaile"/>
        </ul>
        <div class="save" @click="upadr"><a>保存并使用</a></div>
        
    </div>
</template>

<script type="text/javascript">
    import './addSelect.scss'
    import linkage from '../area/area.vue'
    import http from '../../utils/httpclient.js'
    export default{
        data(){
            return{
                adr:'',
                data:{}
            }
        },
        methods:{
            go(){
                window.history.go(-1);
            },
            linkage(re){
                var str=re.pro.name+','+re.city.name+','+re.county.name;
                this.data.address=str;
                console.log(this.data);
            },
            upadr(){
                if(window.localStorage.getItem('user')){
                    this.data.username=JSON.parse(window.localStorage.getItem('user')).username;
                    http.get('addadr',this.data).then((res) => {
                        this.$router.push({path:'/littleswan'})
                    })
                }
                
            }
        },
        components:{
            linkage
        }
    }
</script>