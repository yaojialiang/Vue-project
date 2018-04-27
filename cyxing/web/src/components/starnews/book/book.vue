<template>
    <div class="book">
        <ul class="bookList">
            <li v-for="(val,idx) in bookDataset" :key="idx">
                <router-link :to="'/starnews/book/bookDetail/'+val.id">
                    <img :src="baseUrl+val.img"/>
                    <div class="content">
                        <p class="name">{{val.name}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    import './book.scss';
    import $ from 'jquery';
    import http from '../../../utils/httpClient';
    export default{
        data(){
            return{
                bookDataset:[],
                baseUrl:http.base_url
            }
        },
        mounted(){
            http.get('getOneList',{type:'book'}).then(res=>{
                console.log(res.data);
                this.bookDataset = res.data.data;
            })
        }
    }
</script>