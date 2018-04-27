<template>
    <div id="add">
        <div class="input-group fl">
          <span class="input-group-addon" id="basic-addon1">Title</span>
          <input type="text" class="form-control" placeholder="title" aria-describedby="basic-addon1" v-model="title">
        </div>
        <div class="input-group fl">
          <span class="input-group-addon" id="basic-addon1">Explain</span>
          <input type="text" class="form-control" placeholder="explain" aria-describedby="basic-addon1" v-model="explain">
        </div>
        <div class="input-group fl">
          <span class="input-group-addon" id="basic-addon1">Price</span>
          <input type="text" class="form-control" placeholder="price" aria-describedby="basic-addon1" v-model="price">
        </div>
         <div class="input-group color fl">
          <span class="input-group-addon" id="basic-addon1">Color</span>
          <input type="text" class="form-control" placeholder="Color" aria-describedby="basic-addon1" v-model="colorN">
        </div>
        <input type="button" value="添加" class="fl addcolor" @click="addcolor"  />
        <datelist @showDate="getDate"></datelist>

        <div class="colorList fl">
            <a>The Color:</a><span v-for="text in allcolor">{{text}}<i @click="removeColor(text)">&times;</i></span>
        </div>
        <div class="input-group fl">
          <span class="input-group-addon" id="basic-addon1" v-model="model">Model</span>
          <input type="text" class="form-control" placeholder="Model" aria-describedby="basic-addon1">
        </div>
        <div class="fl">
        <span>The Kind:</span>
            <select v-model="kind">
              <option value="guntong">滚筒</option>
              <option value="imp">波轮</option>
              <option value="drs" selected>干衣机</option>
              <option value="dbc">双桶</option>
              <option value="air">空调</option>
              <option value="cust">定制机</option>
            </select>
        </div>
        <div class="fl size">
            <span>The Kind:</span>
            <input type="text" v-model="size" /><span>kg</span>
        </div>
        <div class="fl">
            <Pupdata @picData="getpic"></Pupdata>
        </div>
        <div class="fl btns">
            <input type="button" value="Save" class="btn green" @click="save" />
            <input type="button" value="cancel" class="btn red" />
        </div>
        <pogou v-if="showgou" @showgou="gou"></pogou>
    </div>
</template>
<script type="text/javascript">
    import './addGoods.scss';
    import './datelist/datelist.scss'
    import datelist from './datelist/datelist.vue'
    import Pupdata from './updata/updata.vue'
    import axios from 'axios'
    import http from '../../utils/httpclient.js'
    import pogou from '../pogou/pogou.vue'
    export default{
        data(){
            return{
                title:'',
                explain:'',
                price:'',
                colorN:'',
                allcolor:[],
                date:'',
                model:'',
                kind:'',
                imgs:[],
                data:null,
                size:'',
                api:this.$store.state.common.baseurl,
                showgou:false
            }
        },
        props:['datelist'],
        methods:{
            addcolor(){
                if(this.colorN==''){
                    return
                }else if(this.allcolor.indexOf(this.colorN) > -1){
                    alert('颜色已存在！');
                    return
                }
                this.allcolor.push(this.colorN);
                this.colorN='';
            },
            removeColor(text){
                console.log(this.allcolor);
                this.allcolor.splice(this.allcolor.indexOf(text),1);
            },
            getDate(date){
                this.date=date;
            },
            getpic(data){
                var ard=this.api+"assets/";
                for(var i=0;i<data.length;i++){
                    this.imgs.push(ard+data[i].name);
                }
            },
            save(){

                console.log(this.title,this.explain,this.price,this.allcolor.join(','),this.date,this.model,this.kind,this.imgs);
                var title=this.title;
                var explain=this.explain;
                var price=this.price;
                var color=this.allcolor.join(',');
                var date=this.date;
                var model=this.model;
                var kind=this.kind;
                var imgs=this.imgs;
                var size=this.size;
                var data={
                    title,
                    explain,
                    price,
                    imgs,
                    color,
                    size,
                    model,
                    date,
                    kind
                };
                var api=this.api+'addgoods';
                 http.get('addgoods', data).then((res) => {
                    this.showgou=true;
                 })
            },
            gou(){
                this.showgou=false;
                this.$router.push({path:'/goods'});
            }
        },
        components:{
            datelist,
            Pupdata,
            pogou
        }
    }

</script>