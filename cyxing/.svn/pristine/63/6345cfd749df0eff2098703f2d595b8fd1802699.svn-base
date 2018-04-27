<template>
    <div id="masterDetail">
        <div class="header">
            <i class="fa fa-reply" @click="goToBack"></i>
            <h4>创业大咖 -- {{masterDetailData.name}}</h4>
            <i></i>
        </div>
        <div class="DetailMian">
            {{masterDetailData.name}}
        </div>
    </div>
</template>

<script>
    import './masterDetail.scss'
    import http from '../../../../utils/httpClient'
    import $ from 'jquery'
    export default{
        data(){
            return{
                masterDetailData:{}
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
            http.get('getOneList',{type:'master',id}).then(res=>{
                this.$store.state.app.index_show=false;
                console.log(res.data)
                this.masterDetailData=res.data.data[0];
            })
        }
    }
</script>