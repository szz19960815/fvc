<template>
	<div>
		<mt-header fixed title="我的" class='head'></mt-header>
		<div class="isMy">
			<a class="touxiang"><img src="../../static/img/touxiang.png"/></a>
			<div id="userInfo" style="display: block;" v-if="loginUser">
				{{loginUser}}
				<button @click="exit" v-if="loginUser">注销</button>
			</div>
			<router-link to='/LoginInfo' v-if='!loginUser'><button>立即登录</button></router-link>
		</div>
		<mt-navbar v-model="choo" class='tip'>
		  <mt-tab-item id="1" :class="{check:choo == '1'}">收藏</mt-tab-item>
		  <mt-tab-item id="2" :class="{check:choo == '2'}">评论</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="choo" class='tip'>
		  <mt-tab-container-item id="1" class='tab_con'>
		  	<img src="../../static/img/cat.png"/>
		  	<span>看到自己喜欢的帖子记得收藏哦</span>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2" class='tab_con'>
		  	<img src="../../static/img/cat.png"/>
		  	<span>光看不发言，把妹没有钱~</span>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	export default {
		name:'Login',
		data(){
			return{
				choo:"1",
				loginUser:sessionStorage.getItem('username')
			}
		},
		methods:{
			exit(){
				sessionStorage.removeItem('username');
				this.loginUser = '';
				if(!loginUser){
					MessageBox.alert('注册成功，请登录！').then(() => {
	//						store.commit("addMutation",value.username)
							value.that.$router.push('/LoginInfo');
						});
				}
			}
		}
	}
</script>

<style>
	.head{background: none;color: #4f4f4f;border-bottom: 0.05rem solid #cbcbcb;}
	.isMy{display:flex;align-items:center;height: 6.3rem; width: 100%;border-bottom: 0.05rem solid #cbcbcb;border-top: 0.05rem solid #cbcbcb;margin-top: 2rem;}
	.isMy button{display:block;width: 9.7rem;height:1.6rem;background:white;border: 0.05rem solid #eaa132;border-radius: 0.5rem;text-align: center;color: #eaa132;}
	.tip{background: #f3f4f8; width: 94%;border-radius: 0.5rem;margin: 0 auto; margin-top: 0.75rem;text-align: center;}
	.tip img{width: 4.5rem; margin: 0 auto;margin-top: 2rem;margin-bottom: 1rem; display: block;}
	.tip span{font-size: 0.6rem;margin-bottom: 1rem;display: block;}
	.check{background: white;border-radius: 0.5rem;}
	.touxiang{width: 5rem;height: 5rem;border-radius: 100%;display: inline-block;margin: 0 1.166rem;}
	.touxiang img{width: 100%;height: 100%;}
</style>