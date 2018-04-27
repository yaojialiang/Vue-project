<template>
    <div class="search">
        <ul class="search-header">
            <li><router-link to="/">&lt;</router-link></li>
            <li><input type="text" @input="showdata" v-model="data"/></li>
            <li><button>搜索</button></li>
        </ul>
        <div class="zhezhao1"></div>
        <div class="searchMain">
            <div class="hot">
                <h3>热门商品</h3>
            </div>
            <h1 v-if="fl">没有商品~~</h1>
            <ul class="hotList" v-for="val in dataset">
                <li @click="toDetails(val._id)">
                    <div>
                        <img :src="val.imgs[0]"/>
                    </div>
                    <div >
                        <p class="title">{{val.title}}</p>
                        <p class="model">
                            {{val.model}}
                       </p>
                        <p><input type="text" class="remai" value="品质315"/></p>
                        <p class="price">￥{{val.price}}.00</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import './search.scss'
    import http from '../../utils/httpclient.js'

    export default{
        data(){
            return{
                data:'',
                dataset:[],
                fl:false
            }
        },
        methods:{
            showdata:function(){
                http.get('fuzzy',{reg:this.data}).then((res) =>{
                    var result=res.data;
                    if(result.status){
                        this.fl = false;
                        this.dataset = result.data;
                    }else{
                        this.dataset=[];
                        this.fl = true;
                    }
                })
            },
            toDetails(id){
                this.$router.push({path:'/details',query: {id: id}})
            }
        }
    }
</script>