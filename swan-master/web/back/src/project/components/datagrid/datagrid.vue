<template>
    <div>
        <div class="topso"><input type="text" id="so" v-model="data" v-on:keyup.13="search"/><input type="button" value="搜索" id="search" @click="search"  /></div>
        <table class="table table-striped" id="table">
            <thead>
                <tr v-if="config.select==1">
                    <th v-for="(val, key) in dataset[0]" v-if="config.cols.indexOf('*') > -1">
                        {{key}}
                    </th>
                    <th v-else-if="config.cols.indexOf(key) > -1">
                        {{key}}
                    </th>
                    <th>Operate</th>
                </tr>
                <tr v-else-if="config.select==0">
                    <th v-for="(val, key) in dataset[0]" v-if="config.cols.indexOf('*') > -1">
                        {{key}}
                    </th>
                    <th v-else-if="config.cols.indexOf(key) < 0">
                        {{key}}
                    </th>
                    <th>Operate</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(obj, idx) in dataset" v-if="config.select==1" @mouseenter="enter" @click="showm(idx)">
                    <td v-for="(val, key) in obj" v-if="config.cols.indexOf('*') > -1">{{val}}</td>
                    <td v-else-if="config.cols.indexOf(key) > -1">{{val}}</td>
                    <td><input type="button" value="Delete" class="del red" @click.stop="del(idx)"/></td>
                </tr>
                <tr v-else-if="config.select==0" @mouseenter="enter" @click="showm(idx)">
                    <td v-for="(val, key) in obj" v-if="config.cols.indexOf('*') > -1">{{val}}</td>
                    <td v-else-if="config.cols.indexOf(key) <0">{{val}}</td>
                    <td><input type="button" value="Delete" class="del red" @click.stop="del(idx)"/></td>
                </tr>
            </tbody>
        </table>
        <spinner v-if="show"></spinner>
        <nav class="fl">
          <ul class="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li v-for="n in this.numpage"><a href="#" @click="page(n)" :class="active">{{n}}</a></li>
            <li v-if="this.numpage==5"><a href="#">...</a></li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="fl go"><span>当前</span><span>{{active}}</span>/<span>{{fen.length}}</span>
            <input type="text" id="into"/> <input type="button" value="开始" id="goto" />
        </div>
        <masks v-if="showmask" @change="showm" :sub="nowdata"></masks>
        <pop v-if="showpop" :sub="getdata" @showset="shwop"></pop>
    </div>
</template>

<script>
    import axios from 'axios'
    import $ from 'jquery'
    import spinner from '../spinner/spinner.vue'
    import './datagrid.scss'
    import masks from './UpMask/upmask.vue'
    import http from '../../utils/httpclient.js'
    import pageview from './page.js'
    import pop from '../popup/popup.vue'
    export default {
        data(){
            return {
                dataset: [],
                show: false,
                showmask:false,
                fen:[],
                g:10,
                numpage:5,
                active:1,
                nowdata:null,
                data:'',
                showpop:false,
                getdata:null

            }
        },
        props: ['config'],
        components: {
            spinner,
            masks,
            pop
        },
        mounted(){
            this.show = true;
            var api=this.config.showapi;
            axios.get(api, {params: this.config.params || {}}).then((res) => {
                console.log(res);
                var data=res.data.data
                this.show = false;
                pageview.page(data,this.g,this.numpage,this.active,(res) => {
                    this.fen=res.fen;
                    this.dataset=res.fen[0];
                    this.numpage=res.numpage;
                    console.log(res);
                });
            })
        },
        methods:{
            page(idx){
                console.log(this.fen[idx]);
                this.active=idx;
                this.dataset=this.fen[this.active-1];
            },
            del(idx){
                
                this.getdata={
                    api:'delgoods',
                    data:{
                        _id:this.dataset[idx]._id
                    },
                    idx:idx
                }
                this.showpop=true;
            },
            shwop(n){
                this.showpop=false;
                if(n){
                    this.dataset.splice(n,1);
                }
                
            },
            enter(e){
                var $el=$(e.target);
                $el.siblings().siblings().removeClass('color999');
                $el.addClass('color999');
            },
            showm(idx){
                this.showmask=!this.showmask;
                this.nowdata=this.dataset[idx];
                
            },
            search(){
                http.get('fuzzy',{reg:this.data}).then((res) => {
                    if(res.data.status){
                        var data=res.data.data;
                        pageview.page(data,this.g,this.numpage,this.active,(res) => {
                            this.fen=res.fen;
                            this.dataset=res.fen[0];
                            this.numpage=res.numpage;
                            console.log(res);
                        });
                    }else{
                        alert('无数据');
                    }
            })
        }
    }
}
</script>