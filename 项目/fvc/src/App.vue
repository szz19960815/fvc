<template>
  <div>
   <router-view></router-view>
   <mt-tabbar id="foot" fixed v-model="selected">
	 <mt-tab-item class='foot' id="首页" :class="{choose:selected == '首页'}">
	 	<div @click="glo('1')">
			<router-link to='/'>
		  <i class='iconfont icon-wode'></i>
		 	首页
		 </router-link>	
		 </div>	
		</mt-tab-item>
		<mt-tab-item class='foot' id="关注" :class="{choose:selected == '关注'}">
			<router-link to='/Like'>
		  <i class='iconfont icon-guanzhu'></i>
		 	关注
		 </router-link>	
		</mt-tab-item>
		<mt-tab-item class='foot' id="我的" :class="{choose:selected == '我的'}">
			<router-link to='/Login' id='login'>
		  <i class='iconfont icon-wode'></i>
		 	我的
		 </router-link>	
		</mt-tab-item>
		</mt-tabbar>
  </div>
</template>

<script>
	import store from './store/publicStore.js'
	import { Tabbar, TabItem } from 'mint-ui';
	import '../static/font/iconfont.css'
	import '../static/css/reset.css'
export default {
  name: 'App',
  store,
  data(){
  	return{
  		selected:'首页'
  	}
  },
  methods:{
  	glo(id){
  		store.dispatch('gloAction',id)
  		console.log(store.state.glo)
  	}
  }
}
</script>

<style>
#foot a{display: flex;flex-direction: column;justify-content: space-around; align-items: center;font-size: 0.6rem;color: #939393;}
#foot i{font-size: 1rem !important;}
#foot{border-top: 0.05rem solid #cbcbcb;}
.choose a{color: #ff9f14 !important;}
.choose i{color: #ff9f14 !important;}
</style>
