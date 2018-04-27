<template>
    <div id="matchsDetail">
        <div class="header">
            <i class="fa fa-reply" @click="goToBack"></i>
            <h4>创业大赛</h4>
            <i></i>
        </div>
        <div class="DetailMian">
            {{matchsDetailData.name}}
        </div>
    </div>
</template>

<script>
    import './matchsDetail.scss'
    import http from '../../../../utils/httpClient'
    import $ from 'jquery'
    export default{
        data(){
            return{
                matchsDetailData:{}
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
            http.get('getOneList',{type:'matchs',id}).then(res=>{
                this.$store.state.app.index_show=false;
                console.log(res.data)
                this.matchsDetailData=res.data.data[0];
            })
        }
    }
</script>