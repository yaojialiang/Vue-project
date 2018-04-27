<template>
    <div class="message">
       <ul class="message-header">
            <li><router-link to="/">&lt;</router-link></li>
            <li>个人信息</li>
       </ul>
       <div class="zhezhao1"></div>
       <ul class="portrait">
           <li>头像</li>
           <li><img src="//pic.mdcdn.cn/h5/img/common/ls_avatar_120.png?x-oss-process=image/format,webp/quality,Q_90&" alt="" /></li>
       </ul>
       <ul class="nickname">
           <li>昵称</li>
           <li><router-link to="/editNickname">未设置></router-link></li>
       </ul>
       <ul class="gender">
           <li>性别</li>
           <li>未设置></li>
       </ul>
        <ul class="date">
           <li>生日</li>
           <li>请填写日期</li>
       </ul>
       <div class="zhezhao1"></div>
       <ul class="address">
           <li>我的地址</li>
           <li>></li>
       </ul> 
       <div class="zhezhao1"></div>
       <ul class="security">
           <li>账号安全</li>
           <li>可修改密码></li>
       </ul>
       <ul class="out" @click="logout">
            退出登录
       </ul>
    </div>
</template>

<script>
    import './message.scss'

    export default{
        data(){
          return{

          }
        },
        mounted(){
           var name = this.$route.query.name;
        },
        methods:{
            logout(){
                window.localStorage.removeItem('user');
                window.localStorage.removeItem('useradr');
                this.$router.push({path:'/'});
            }
        }
    }
</script>