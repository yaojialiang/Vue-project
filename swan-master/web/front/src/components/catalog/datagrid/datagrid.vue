<template>
    <div>
        <ul>
            <li v-for="(val,idx) in dataset"  @click="toDetails(val._id)" class="clearfix"><router-link :to="'/details/'+val._id">
                <div class="img fl">
                    <img :src="dataset[idx].imgs[0]" />
                </div>
                <div class="cont fl">
                    <h4>{{val.title}}</h4>
                    <p>¥ {{val.price}}.00</p>
                </div>
                </router-link>
            </li>
        </ul>
        <spinner v-if="show"></spinner>
    </div>
</template>

<script>

    // import http from 'axios'
    import http from '../../../utils/httpclient.js'

    import spinner from '../spinner/spinner.vue'

    export default {
        data(){
            return {
                dataset:[],
                src:[],
                show:false
            }
        },
        props:['api','kind'],  //子组件获取父组件的属性要用props
        components:{
            spinner
        },
        mounted(){
            this.show = true;
            http.get('goods',{kind:this.kind}).then((res) => {
                console.log(res);
                this.dataset=res.data.data;
                this.show = false;

            })
        },
        methods:{
            toDetails(id){
                this.$router.push({path:'/details',query: {id: id}})
            }
        }
    }
</script>