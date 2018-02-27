<template>
	<div id="login_info">
		<span id="cancel" @click="cancel">×</span>
		<h3>欢迎登录有乐</h3>
		<p><img src="../../static/img/login_logo.png"/><span>Version 1.0.0</span></p>
		<p><input type="text" id="name" placeholder="请输入账号" v-model="name"/></p>
		<p><input type="password" id="psw" placeholder="请输入密码" v-model="psw"/></p>
		<p><button @click="login">登录</button></p>
		<p><button @click="register">注册</button></p>
	</div>
</template>

<script>
	import store from '../store/publicStore.js'
	import { MessageBox } from 'mint-ui'
	export default {
		name:'LoginInfo',
		data(){
			return{
				name:'',
				psw:''
			}
		},
		methods:{
			login(){
				let user = {
					username:this.name,
					password:this.psw,
					that:this
				}
//				store.dispatch("loginAction",user)
				if(user.username == ''){
					MessageBox.alert('请输入用户名')
				}else{
					if(user.password == ''){
						MessageBox.alert('请输入密码')
					}else{
						store.dispatch("loginAction",user)
					}
				}
			},
			register(){
				console.log("这是注册")
				let user = {
					username:this.name,
					password:this.psw,
					that:this
				}
				
				store.dispatch("registerAction",user)
			},
			cancel(){
				this.$router.push('/Login')
			}
		}
	}
</script>

<style>
	#login_info{overflow: hidden;}
	#cancel{font-size: 1.2rem;color:#ffa91e ;}
	h3,p{text-align: center;}
	h3{margin-top:4rem;margin-bottom: 0.5rem;}
	p{margin: 1rem auto;}
	p img{width: 4.133rem;margin:0 auto;display: block;}
	p span{margin-bottom: 2rem;font-size: 0.7rem;}
	p input{border: none;border-bottom: 0.05rem solid #dcdcdc;width: 13.5rem;font-size: 0.7rem;padding-bottom: 0.8rem;margin-top: 0.8rem;}
	button{width: 13.5rem; height: 2.5rem; border-radius: 2.5rem;background: #fda014;color: white;border: none;margin: 0 auto;}
</style>