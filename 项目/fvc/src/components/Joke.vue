<template>
	<div id="listContent">
		<div id="article_info"><span class='back' @click='no_articleInfo'>〈</span><div id="art">
			
		</div></div>
		<mt-loadmore style="font-size: 0.6rem;color: cornflowerblue;" :top-method="loadTop"  topPullText="刷新" ref="loadmore"  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="5">
		<div class="con" v-for="data,index in dataList">
			<h2><a><img :src="data.profile_image"/></a><span>{{data.name}}</span></h2>
			<p>{{data.text}}</p>
			<div class="container">
				<input type="hidden" :value="data.type" />
				<div id="article"  :class="{Type:data.type !== '29'}" @click="articleInfo(data.id)">
					{{data.text}}
				</div>
			</div>
			<div class="res">
				<span class="zan" ><i @click="zan(index)" class="iconfont icon-zan"></i><b>{{data.love}}</b></span>
				<span class="cai" ><i @click="cai(index)" class="iconfont icon-cai"></i><b>{{data.hate}}</b></span>
				<span class="comment" ><i class="iconfont icon-xiaoxi-xiaoxi"></i><b></b></span>
				<span class="share" ><i class="iconfont icon-msnui-share"></i></span>
			</div>
		</div>	
		</mt-loadmore>
		<mt-spinner type="fading-circle" id="loadMore" color="cornflowerblue" v-if="loadLogo"></mt-spinner>
	</div>
</template>

<script>
	import store from '../store/publicStore.js'
	import { Loadmore } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
	import $ from 'n-zepto';
	export default {
		name:'Joke',
		store,
		data(){
			return{
				allLoaded:false,
				timer:'',
				loadLogo:false,
				Img:{},
				Article:{},
				glo:'1'
			}
		},
		mounted(){
//			store.dispatch('listAction');
//			console.log(store.state.JOKE)
			this.$emit("glo",'5');
		},
		methods:{
			loadTop(){
			  setTimeout(()=>{
			  	this.$refs.loadmore.onTopLoaded();
			  },1000)
			},
			loadMore(){
				clearTimeout(this.timer)
				this.loadLogo = true;
				this.timer = setTimeout(()=>{
					let page = store.state.JOKE.length/20;
//					console.log(page)
					store.dispatch('moreJokeAction',page+1);
					this.loadLogo = false;
				},800)
			},
			articleInfo(id){
				document.getElementById("article_info").style.display="block";
				store.state.JOKE.map((data,i)=>{
					if(data.id === id){
//						console.log(data.name)
						this.Article = store.state.JOKE[i]
//						console.log(this.Article)
						document.getElementById("art").innerHTML = "<div class='con'><h2 style='margin-left:2rem'><a><img src='"+this.Article.profile_image+"'/></a><span>"+this.Article.name+"</span></h2><div id='article'>"+this.Article.text+"</div></div>"
					}
				});
			},
			no_articleInfo(){
				document.getElementById("article_info").style.display="none";
			},
			zan(index,e){
				e = event || ''
				store.state.JOKE[index].love = Number(store.state.JOKE[index].love)+1;
				e.target.setAttribute('style','color:red');
				store.state.like.push(store.state.JOKE[index])
			},
			cai(index,e){
				e = event || ''
				store.state.JOKE[index].hate = Number(store.state.JOKE[index].hate)+1;
				e.target.setAttribute('style','color:red');
			}
		},
		computed:{
			dataList(){
//				console.log(store.state.JOKE)
				return store.state.JOKE
			}
		}
	}
</script>

<style>
	#listContent{width: 100%;overflow: hidden;padding-top: 2.5rem;padding-bottom: 2.5rem;}
	.con{color: #656565;}
	.con h2{padding: 0.5rem;width: 100%;font-size: 0.6rem;font-weight: normal;height: 1.5rem; line-height: 1.5rem;}
	.con h2 a{display: inline-block;width: 1.5rem;height: 1.5rem;border-radius: 100%;overflow: hidden;float: left;}
	.con h2 a img{width: 100%;height: 100%;}
	.con h2 span{display: inline-block;height: 1.5rem;line-height: 1.5rem;float: left;margin-left: 0.6rem;}
	.con p {height: 1rem;line-height:1rem;font-size: 0.6rem;padding:0 0.5rem;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
	.res{height: 2rem;line-height: 2rem;}
	.res span{padding:0 0.5rem;height: 100%;display: inline-block;}
	.res span i{color: #CCCCCC;}
	.res span b{font-weight: normal;font-size: 0.6rem;margin-left: 0.6rem;color: #898989 !important;}
	.comment{margin-left: 2rem;}
	.share{float: right;margin-right: 1rem;}
	.Type{display: none;}
	.container img{overflow: hidden;height: 6rem;margin: 0 0.5rem;}
	#article{font-size: 0.6rem; padding: 0 0.5rem;line-height: 1rem;text-indent: 2em;}
	#loadMore{position: fixed;left: 45%;bottom: 2.5rem;}
	
	#img_info{overflow:auto;position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: black;z-index: 99;display: none;text-align: center;}
	#img_info img{width: 99%;}
	#article_info{overflow:auto;position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: white;z-index: 99;display: none;}
	#article_info .back{overflow:hidden;display:inline-block;width:1rem;height: 1rem;font-size: 0.8rem;color: #ff9f14;position: absolute;top: 0.8rem;left: 0.5rem;}
	.z{color: #ff9f14 !important;}
</style>