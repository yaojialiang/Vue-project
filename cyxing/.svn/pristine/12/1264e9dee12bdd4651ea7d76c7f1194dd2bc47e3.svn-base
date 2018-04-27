<template>
    <div id="busistarDetail">
        <div class="header">
            <i class="fa fa-reply" @click="goToBack"></i>
            <h4>校园创业之星 -- {{busistarDetailData.starname}}</h4>
            <i></i>
        </div>
        <div class="DetailMian">
            {{busistarDetailData.starname}}
        </div>
    </div>
</template>

<script>
    import './busistarDetail.scss'
    import http from '../../../../utils/httpClient'
    import $ from 'jquery'
    export default{
        data(){
            return{
                busistarDetailData:{}
            }
        },
        methods:{
            goToBack(){
                history.go(-1);
            }
        },
        mounted(){
            var id = this.$route.params.id;
            this.$store.state.app.index_show=true;
            http.get('getOneList',{type:'busistar',id}).then(res=>{
                this.$store.state.app.index_show=false;
                console.log(res.data)
                this.busistarDetailData=res.data.data[0];
            })
        }
    }
</script>