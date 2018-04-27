<template>
    <div id="bookDetail">
        <div class="header">
            <i class="fa fa-reply" @click="goToBack"></i>
            <h4>创业书籍</h4>
            <i></i>
        </div>
        <div class="DetailMian">
            {{bookDetailData.name}}
        </div>
    </div>
</template>

<script>
    import './bookDetail.scss'
    import http from '../../../../utils/httpClient'
    import $ from 'jquery'
    export default{
        data(){
            return{
                bookDetailData:{}
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
            http.get('getOneList',{type:'book',id}).then(res=>{
                this.$store.state.app.index_show=false;
                console.log(res.data)
                this.bookDetailData=res.data.data[0];
            })
        }
    }
</script>