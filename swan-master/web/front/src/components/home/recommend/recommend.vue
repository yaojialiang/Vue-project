<template>
    <div>
       <div class="recommend">
            <div class="recommend-top">
                <h3>大容量 任性洗</h3>
            </div>
            <div class="recommend-c">
                <ul>
                    <li v-for="val in data">
        <!--               <router-link :to="'/details/'+val._id" ><img :src="val.imgs[0]"/></router-link> -->
                        <vue-lazy-component>
                            <div @click="toDetails(val._id)">
                                <img :src="val.imgs[0]"/>
                            </div>
                        </vue-lazy-component>
                        <p class="desc">{{val.model}}</p>
                        <p class="name">{{val.title}}</p>
                        <p class="price">￥{{val.price}}.00</p>
                    </li>
                </ul>
            </div>
       </div>
    </div>
</template>

<script>
    import './recommend.scss'
    import axios from 'axios'
    import http from '../../../utils/httpclient.js'
    export default {
        data(){
            return {
                api:this.$store.state.common.baseurl,
                data:[]
            }
        },
        mounted(){
            http.get('goods',{dis:'big'}).then(
                (res) => {
                  this.data = res.data.data;
                })
        },
        methods:{
            toDetails(id){
                this.$router.push({path:'/details',query: {id: id}})
            }
        }
    }
</script>