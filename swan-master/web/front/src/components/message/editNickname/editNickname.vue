<template>
    <div class="editNickname">
        <ul class="header">
            <li><router-link to="/message">取消</router-link></li>
            <li>昵称</li>
        </ul>
        <div class="zhezhao1"></div>
        <div>
            <input type="text" class="nickname" v-model="name"/>
        </div>
        <div class="complete">
            <span @click="toDetails(name)">完成</span>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './editNickname.scss'
    export default{
        data(){
            return{
                name:''
            }
        },
        methods:{
            toDetails(name){
              this.$router.push({path:'/message',query: {name: name}})
            }
        }
    }
</script>