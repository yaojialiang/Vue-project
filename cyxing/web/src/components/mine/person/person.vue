<template>
    <div id="T-person">
        <div class="T-person-head">
            <h3>
                <i @click="goback" class="fa fa-angle-left"></i>
                基本信息
                <router-link to="/mine">
                    <span @click="save" class="saveInfo">保存</span>
                </router-link>
            </h3>
        </div>
        <div class="T-person-main">
            <div class="person-photo" @click="editPhoto" v-if="uimg">
                <form id="uploadForm">
                    <input  @change="editPhoto" class="upload" type="file" name="head" />
                </form>
                <img :src="baseUrl+uimg" />
            </div>
            <ul>
                <li><label for="">昵称：</label><input type="text" :value="nickName"/></li>
                <li>
                    <label for="">所在地：</label>
                    <select name="province" id="province">
                        <option value="请选择">请选择</option>
                    </select>
                    <select name="city" id="city">
                        <option value="请选择">请选择</option>
                    </select>
                    <select name="town" id="town">
                        <option value="请选择">请选择</option>
                    </select>
                </li>
                <li><label for="">简介：</label><input type="text" :value="jianjie"></li>
                <li><label for="">邮箱：</label><input type="text" :value="email"></li>
                <li><label for="">大学：</label><input type="text" :value="school"></li>
                <li><label for="">账户：</label>{{account}}</li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    
    import './person.scss'
    import $ from 'jquery';
    import {provinceList} from './area'
    import http from '../../../utils/httpClient'

    export default{
        data(){
            return{
                nickName:'',
                uimg:'',
                baseUrl:http.base_url,
                jianjie:'',
                account:'',
                email:'',
                school:'',
                updatePhoto:false
            }
        },
        components:{
        },
        methods:{
            goback(){//点击返回时
                history.go(-1);
            },//点击保存时
            save(){
                console.log(666);

            },
            editPhoto(){
                //修改头像
                var formData = new FormData($( "#uploadForm" )[0]);  
                $.ajax({  
                  url: this.baseUrl+'/Muploadhead',  
                  type: 'POST',  
                  data: formData,  
                  async: false,  
                  cache: false,  
                  contentType: false,  
                  processData: false, 
                  success:(res)=> {  
                      this.uimg = res.data;
                  }
                })
            }
        },
        mounted(){
            let userID =window.sessionStorage.getItem('userID');
            http.get('Mgetuser',{id:userID}).then((res)=>{
                this.nickName=res.data.data[0].nickname;
                this.uimg=res.data.data[0].headImg;
                this.jianjie=res.data.data[0].manifesto;
                this.account=res.data.data[0].username;
                this.email=res.data.data[0].email;
                this.school=res.data.data[0].school;
            })


            //三级联动
            var province=$("#province"),city=$("#city"),town=$("#town");
            for(var i=0;i<provinceList.length;i++){
                addEle(province,provinceList[i].name);
            }
            function addEle(ele,value){
                var optionStr="";
                optionStr="<option value="+value+">"+value+"</option>";
                ele.append(optionStr);
            }
            function removeEle(ele){
                ele.find("option").remove();
                var optionStar="<option value="+"请选择"+">"+"请选择"+"</option>";
                ele.append(optionStar);
            }
            var provinceText,cityText,cityItem;
            province.on("change",function(){
                provinceText=$(this).val();
                $.each(provinceList,function(i,item){
                    if(provinceText == item.name){
                        cityItem=i;
                        return cityItem
                    }
                });
                removeEle(city);
                removeEle(town);
                $.each(provinceList[cityItem].cityList,function(i,item){
                    addEle(city,item.name)
                })
            });
            city.on("change",function(){
                cityText=$(this).val();
                removeEle(town);
                $.each(provinceList,function(i,item){
                    if(provinceText == item.name){
                        cityItem=i;
                        return cityItem
                    }
                });
                $.each(provinceList[cityItem].cityList,function(i,item){
                    if(cityText == item.name){
                        for(var n=0;n<item.areaList.length;n++){
                            addEle(town,item.areaList[n])
                        }
                    }
                });
            });
        }
    }


</script>