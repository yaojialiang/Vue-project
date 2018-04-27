<template>
    <div>
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
                <tr v-for="(obj, idx) in dataset" v-if="config.select==1" @mouseenter="ac" @click="showm(idx)">
                    <td v-for="(val, key) in obj" v-if="config.cols.indexOf('*') > -1">{{val}}</td>
                    <td v-else-if="config.cols.indexOf(key) > -1">{{val}}</td>
                    <td>
                    <input type="button" value="Delete" class="del red" @click.stop="del(idx)"/>
                     <input type="button" value="Check" class="det bc58" @click.stop="det(idx)"/></td>
                </tr>
                <tr v-else-if="config.select==0" @mouseenter="ac" @click="showm(idx)">
                    <td v-for="(val, key) in obj" v-if="config.cols.indexOf('*') > -1">{{val}}</td>
                    <td v-else-if="config.cols.indexOf(key) <0">{{val}}</td>
                    <td>
                    <input type="button" value="Delete" class="del red" @click.stop="del(idx)"/>
                    <input type="button" value="Check" class="det bc58" @click.stop="det(idx)"/></td>
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
        <usermask v-if="showmask" @change="showm" :sub="nowdata"></usermask>
        <usercheck v-if="showcheck" @changec="det" :sub="nowdata"></usercheck>
        <pop v-if="popshow" @showset="showp" :sub="getdata"></pop>
       
    </div>
</template>

<script>
    import axios from 'axios'
    import http from '../../../utils/httpclient.js'
    import $ from 'jquery'
    import spinner from '../../spinner/spinner.vue'
    import usermask from './usercar/usermask.vue'
    import usercheck from './usercheck/usercheck.vue'
    import './datacss.scss'
    import pop from '../../popup/popup.vue'
    
    export default {
        data(){
            return {
                dataset: [],
                show: false,
                showmask:false,
                showcheck:false,
                fen:[],
                g:10,
                numpage:5,
                active:1,
                nowdata:null,
                checkdata:null,
                popshow:false,
                getdata:null
                
            }
        },
        props: ['config'],
        components: {
            spinner,
            usermask,
            usercheck,
            pop
        },
        mounted(){
            this.show = true;
            var api=this.config.showapi;
            axios.get(api, {params: this.config.params || {}}).then((res) => {
                console.log(res);
                var data=res.data.data
                // this.dataset = data ;
                this.show = false;
                var g=this.g;
                var n=Math.floor(data.length/g);
                var nl=data.length%g;
                var num=0;
                for(var i=1;i<=n;i++){
                    
                    this.fen.push(data.slice(num,num+g));
                    num+=g;
                }
                this.fen.push(data.slice(n*g,data.length+1));
                this.dataset=this.fen[0];
                if(this.fen.length>5){
                    this.numpage=5
                }else{
                    this.numpage=this.fen.length;
                }

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
                    api:'delusers',
                    data:{
                        _id:this.dataset[idx]._id
                    },
                    idx:idx
                }   
                this.popshow=true;
            },
            showp(n){
                this.popshow=false;
                if(n){
                    this.dataset.splice(n,1);
                }
            },
            showm(idx){
                this.showmask=!this.showmask;
                this.nowdata=this.dataset[idx];
                
            },
            ac(e){
                $(e.target).siblings().removeClass('color999');
                $(e.target).addClass('color999');
            },
            det(idx){
                this.showcheck=!this.showcheck;
                this.nowdata=this.dataset[idx];
                // console.log(this.nowdata);
            }
        }
    }
</script>