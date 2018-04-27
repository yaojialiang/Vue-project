<template>
<div id="max">
	<div class="login-box">
		<div class="col-sm-12 b-r">
			<h3 class="m-t-none m-b">登录</h3>
			<form role="form">
			    <div class="form-group text-left">
			        <label>用户名：</label>
			        <input type="text" v-model="username" name="username" placeholder="请输入用户名" class="form-control required">
			    </div>
			    <div class="form-group  text-left">
			        <label>密码：</label>
			        <input type="password" v-model="pwd" name="password" placeholder="请输入密码" class="form-control required">
			    </div>
			    <div>
			    	<input type="button" class="btn btn-primary pull-right m-t-n-xs" value="登录" @click="login">
			    </div>
			</form>
		</div>
		<div class="copyright">2018 © pan by www.pan.com</div>
	</div>
</div>
</template>

<script type="text/javascript">
	import './Login.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import http from '../../utils/httpclient.js'
	import router from '../../router/router.js'

	export default {
		data: function(){
			return {
				username: '',
				pwd: '',
				api:this.$store.state.common.baseurl
			}
		},
		mounted(){
			$('#max').css('height',window.innerHeight);
			 window.onresize=function(){
			 	$('#max').css('height',window.innerHeight);
			 }
		},
		methods: {
			login: function(event){
				http.post('directorlogin',{username:this.username,password:this.pwd}).then((res) => {
					console.log(res);
					var data=res.data;
					if(data.status){
						var dataset=JSON.stringify({un:data.data,user:this.username});
						window.localStorage.setItem('user',dataset);
						this.$router.push({path:'/'})
					}else{
						alert('用户名或密码错误');
					}
				})
			}
		}
	}
</script>