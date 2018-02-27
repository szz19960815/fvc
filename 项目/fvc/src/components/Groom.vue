<template>
  <div>
    <mt-navbar v-model="selected" id='groom_head' fixed>
		  <mt-tab-item id="1" :class="{ch:selected == '1'}"><router-link to='/'>推荐</router-link></mt-tab-item>
		  <mt-tab-item id="2" :class="{ch:selected == '2'}"><router-link to='/Video'>视频</router-link></mt-tab-item>
		  <mt-tab-item id="3" :class="{ch:selected == '3'}"><router-link to='/Images'>图片</router-link></mt-tab-item>
		  <mt-tab-item id="4" :class="{ch:selected == '4'}"><router-link to='/Audio'>声音</router-link></mt-tab-item>
		  <mt-tab-item id="5" :class="{ch:selected == '5'}"><router-link to='/Joke'>段子</router-link></mt-tab-item>
		</mt-navbar>
		<router-view @glo='glos'></router-view>
  </div>
</template>

<script>
	import store from '../store/publicStore.js'
export default {
  	name: 'Groom',
  	data(){
  		return{
  			selected:'1'
  		}
  	},
  	methods:{
  		glos:function(value){
  			this.selected = value;
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	#groom_head{height: 2.5rem; width: 100%;border-bottom: 0.05rem solid #cbcbcb;}
	#groom_head a{text-decoration: none; font-size: 0.6rem;color: #888888;}
	.ch a{color: #26a2ff !important;}
</style>
