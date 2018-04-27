<template>
    <div id="register">
        <i class="fh" v-on:click="gouser"><返回</i>
        <div class="head">
            <h5>欢迎注册</h5>
             <img src="../../assets/img/logo/cyxing_logo.jpg" height="130" width="392"/>
        </div>
        <p v-show="showTishi" class="showtishi">{{tishi}}</p>
        <div class="phone">
            <input type="number" class="username" placeholder="填写手机号" v-model="username" v-on:input="shuru" v-on:blur="phonetest" />
        </div>
        <div class="pwd">
            <input type="password" class="password" placeholder="填写密码" v-model="password" />
        </div>
        <input type="button" value="注册" class="btnreg" v-on:click="register" />
        <div class="tips">
            <span class="login" v-on:click="gologin">快速登录</span>
        </div>
        <spinner v-if="show"></spinner>
    </div>
</template>

<script>
    import './register.scss'
    // import axios from 'axios'
    import http from '../../utils/httpClient.js'
    import spinner from '../spinner/spinner.vue'
    export default{
        data(){
            return{
                showTishi: false,
                show:false,
                tishi: '',
                username: '',
                password: ''
            }
        },
        components:{
            spinner
        },
        methods:{
            phonetest(){
                var reg = /^1[34578]\d{9}$/i;
                if(!reg.test(this.username)){
                    this.tishi = '手机号码格式不正确';
                    this.showTishi = true;
                    return false;
                }

                http.post('Mlogin',{username:this.username}).then((res)=>{
                    let ts = document.querySelector('.showtishi');
                    console.log(res);
                    if(res.data.status){
                        console.log(666)
                        this.tishi = '此手机号码已注册，请直接登录';
                        this.showtishi = true;
                        ts.style.display='block';
                        document.getElementsByClassName('btnreg')[0].style.backgroundColor = "#ccc";
                        return false;
                        // document.getElementsByClassName('btnreg')[0].disabled = true;
                    }else if(res.status == 'false'){
                        document.getElementsByClassName('btnreg')[0].disabled = false;
                    }
                })
            },
            register(){
                this.show = true;
                var username = this.username;
                var password = this.password;
                console.log(username.length)
                if(username == '' || password == '' ){  
                    this.tishi = '账号或密码不能为空'
                    this.showTishi = true
                    this.show = false;
                    return;  
                }
                if(username.length!=11){
                    this.tishi = '请输入正确用户名'
                    this.showTishi = true
                    this.show = false;
                    return;  
                }
                http.post('Mreg',{username:username,password:password}).then((res)=>{
                    console.log(res.data.status);
                    if(res.data.status){
                        var obj = {
                            'username':username,
                            'password':password
                        }
                        localStorage.setItem('data',JSON.stringify(obj));
                        alert('注册成功');
                        // this.$router.go(-1) //go方法回跳回前一个页面
                        this.$router.push('/Login');
                        this.show = false;
                        console.log(res);
                    }
                })
            },
            gouser(){
                // this.$router.push('/User');
                history.go(-1);
            },
            gologin(){
                this.$router.push('/Login');
            },
            shuru(){
                document.getElementsByClassName('btnreg')[0].style.backgroundColor = "#0ff";
            }
        }
    }
</script>