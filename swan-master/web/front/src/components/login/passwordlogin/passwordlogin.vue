<template>
    <div id='inputmsg'>
        <div class='username'>
            <div class='blank'></div>
            <div class='content'>
                <input type='text' placeholder='请输入用户名' maxlength='11' v-model='phonenum' @keyup='send'/>
            </div>
        </div>
        <div class='password'>
            <div class='blank'></div>
            <div class='content'>
                <input type='password' placeholder='密码' :text='password' v-model='password' @keyup='send'/>
            </div>
        </div>
        <span class='findpassword'>找回密码</span>
    </div>
</template>

<script>
    import './passwordlogin.scss'
    export default{

        data(){
            return{
                phonenum:'',
                password:''
            }
        },
        methods:{
            send(){
                this.$emit('listentochild',this.phonenum,this.password)
            }
        }
        
    }
</script>  