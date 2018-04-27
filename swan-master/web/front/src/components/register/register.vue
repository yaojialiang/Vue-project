<template>
    <div class='box'>
        <header>
            <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

            
            <div class='back'><router-link to="/littleswanlogin"><i class='fa fa-angle-left fa-lg'></i></router-link></div>
            <div class='logintab'>
                <h1>注册</h1>
            </div>
            <div class='blank'></div>
            
        </header>


        <div class='inputmsg2'>
            <div class='username2'>
                
                <div class='content'>
                    <input type='text' placeholder='请输入用户名' maxlength='11'  v-model='phone'/>
                </div>
            </div>
            <div class='password2'>
                
                <div class='content'>
                    <input type='text' placeholder='验证码' maxlength='4'/>
                </div>
                <div class='getverify'>
                    <a>获取验证码</a>
                </div>
            </div>
            
        </div>


        <div class='inputmsg'>
            <div class='username'>
                <div class='blank'></div>
                <div class='content'>
                    <input type='text' placeholder='输入新密码' maxlength='20' v-model='password' @blur='checkpassword'/>
                </div>
            </div>
            <div class='password'>
                <div class='blank'></div>
                <div class='content'>
                    <input type='password' placeholder='确认新密码' maxlength='20' v-model='passwordagain' @blur='configpassword'/>
                </div>
            </div>
            <span class='passwordzucheng'>密码由6-20位英文字母，数字或符号组成</span>
           
        </div>

         <p v-if='tip' class='tip'>密码不一致</p>
         <p v-if='passwordtip' class='tip'>密码不合法</p>
         <p v-if='msgcomplete' class='tip'>信息不完整</p>

        <div class='registerbtn'>
            <a @click='register'>注册</a>
        </div>
    </div>


</template>

<script>
    import './register.scss'
    import http from '../../utils/httpclient.js'
    export default{
        data(){
            return{
                phone:'',
                password:'',
                passwordagain:'',
                tip:false,
                passwordtip:false,
                msgcomplete:false,
            }   
        },
        methods:{
            register(){
                if(this.phone && this.tip==false && this.passwordtip==false){
                    http.get('reg', {username: this.phone, password: this.password}).then((res) => {
                        if(res.data.status){
                            //注册成功之后跳转到登陆页面
                            this.$router.push('littleswanlogin');
                        }
                    })
                }else{
                    this.msgcomplete=true;
                }
                
            },
            configpassword(){
                if(this.password != this.passwordagain){
                    this.tip=true;
                }else{
                    this.tip=false;
                }
            },
            checkpassword(){

                if(!/^\S{6,20}$/.test(this.password)){
                    this.passwordtip=true;
                    
                }else{
                    this.passwordtip=false;
                }
            }
        }
    }
</script>