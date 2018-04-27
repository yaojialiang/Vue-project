<template>
    <div class='box'>
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <header>
            <div class='back'><router-link to="/"><i class='fa fa-angle-left fa-lg'></i></router-link></div>
            <div class='logintab'>
                <ul class='logintabitems'>
                    <li><span @click="selected" data-type='password'>账号密码登录</span></li>
                    <li><span @click="selected" data-type='verify'>短信验证码登录</span></li>
                </ul>
            </div>
            <div class='blank'></div>
        </header>

        <component :is='logintype' v-on:listentochild='showmsgfromchild'></component>
        <p class='tip' v-if='msg'>信息不正确</p>
        <div class='button'>
            <a @click='login'>登陆</a>
            <a @click='register'>注册</a>
        </div>
    </div> 
</template>

<script>
    import './littleswanlogin.scss'

    import passwordlogincomponent from './passwordlogin/passwordlogin.vue'
    import verifylogincomponent from './verifylogin/verifylogin.vue'

    import http from '../../utils/httpclient.js'

    
    export default{
        data(){
            return{
                logintype:'password',
                phonenum:'',
                password:'',
                msg:false,
            }
        },
        methods:{
            selected:function(event){
                var logintabitems = document.getElementsByClassName('logintabitems')[0].children;
                for(var i=0;i<logintabitems.length;i++){
                    if(logintabitems[i].children[0]==event.target){
                        logintabitems[i].children[0].style.borderBottom='2px solid #0092d8';
                        logintabitems[i].children[0].style.color='#0093d5';
                        this.logintype = logintabitems[i].children[0].dataset.type;
                    }else{
                        logintabitems[i].children[0].style.borderBottom='0 none';
                        logintabitems[i].children[0].style.color='#333333';
                    }
                }
            },
            login(){
                http.post('login',{username: this.phonenum, password: this.password}).then((res) => {
                    console.log(res.data)
                    if(res.data.status){
                        var data=JSON.stringify({username:this.phonenum,un:res.data.data});
                        window.localStorage.setItem('user',data);
                        
                        this.$router.push({path: '/personalcenter'});
                    }else{
                        this.msg = true;
                    }
                })
            },
            register(){
                this.$router.push({path: '/register'});
            },
            showmsgfromchild(phonenum,password){
                
                this.phonenum=phonenum;
                this.password=password;
            }
        },
        components:{
            verify:verifylogincomponent,
            password:passwordlogincomponent,
            
        }
    }
</script>  