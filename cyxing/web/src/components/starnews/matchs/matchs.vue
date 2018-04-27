<template>
    <div class="matchs">
        <ul>
            <li>创业大赛</li>
        </ul>
    </div>
</template>

<script>
    import './matchs.scss';
    import $ from 'jquery';
    import http from '../../../utils/httpClient';
    export default{
        data(){
            return{
                matchsDataset:[]
            }
        },
        mounted(){
            http.get('getOneList',{type:'matchs'}).then(res=>{
                console.log(res.data);
            })
        }
    }
</script>