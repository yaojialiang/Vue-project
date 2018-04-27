<template>
    <div>
        <div class="product">
            <div class="product-1" v-for="val in data">
                 <vue-lazy-component>
                    <div @click="toDetails(val._id)">
                        <img :src="val.url"/>
                    </div> 
                </vue-lazy-component>
                <div class="desc">{{val.model}}</div>
                <div class="name">{{val.title}}</div>
                <div class="price">￥{{val.price}}.00</div>
            </div>
        </div>
       <spinner v-if="show"></spinner>
    </div>
</template>

<script>
    import './product.scss'
    import axios from'axios'
    import spinner from '../../spinner/spinner.vue'
    import http from '../../../utils/httpclient.js'
    export default {
        data(){
            return {
                api:this.$store.state.common.baseurl,
                data:[],
                show:false
            }
        },
        component:{
            spinner
        },
        mounted(){
            this.show = true;
            http.get('goods',{dis:'index'}).then(
                (res) => {
                  this.data = res.data.data;
                })
            this.show = false;
        },
        methods:{
            toDetails(id){
                this.$router.push({path:'/details',query: {id: id}})
            }
        }
    }
</script>
