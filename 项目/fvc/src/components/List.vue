<template>
	<div id="listContent">
		<div id="img_info" @click="no_imgInfo"></div>
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
				<video width="100%" height="200" :class="{Type:data.type !== '41'}" controls :src="data.video_uri" type="video/mp4" :poster="data.profile_image"></video>
				<img :src="data.image2" :class="{Type:data.type !== '10'}" @click="imagesInfo(data.id)"/>
				<div id="voice" :class="{Type:data.type !== '31'}">
					<img :src="data.image3"/>
					<div>
						<p>作者：data.name</p>
						<p>时间：data.create_time</p>
					</div>
					<audio :src="data.voice_uri" :class="{Type:data.type !== '31'}" controls></audio>
				</div>
			</div>
			<div class="res">
				<span class="zan" ><i @click="zan(index)" class="iconfont icon-zan"></i><b>{{data.love}}</b></span>
				<span class="cai" ><i @click="cai(index)" class="iconfont icon-cai"></i><b>{{data.hate}}</b></span>
				<span class="comment"><i class="iconfont icon-xiaoxi-xiaoxi"></i><b></b></span>
				<span class="share"><i class="iconfont icon-msnui-share"></i></span>
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
		name:'List',
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
//			console.log(store.state.LIST)
			this.$emit("glo",'1');
		},
		methods:{
			loadTop(){
			  setTimeout(()=>{
			  	store.dispatch('listAction');
			  	this.$refs.loadmore.onTopLoaded();
			  },1000)
			},
			loadMore(){
				clearTimeout(this.timer)
				this.loadLogo = true;
				this.timer = setTimeout(()=>{
					let page = store.state.LIST.length/20;
//					console.log(page)
					store.dispatch('moreAction',page+1);
					this.loadLogo = false;
				},800)
			},
			imagesInfo(id){
				document.getElementById("img_info").style.display="block";
				store.state.LIST.map((data,i)=>{
					if(data.id === id){
//						console.log(data.name)
						this.Img = store.state.LIST[i]
//						console.log(this.Img)
						document.getElementById("img_info").innerHTML = '<img src='+data.cdn_img+' />'
					}
				});
				
			},
			no_imgInfo(){
				document.getElementById("img_info").style.display="none";
			},
			articleInfo(id){
				document.getElementById("article_info").style.display="block";
				store.state.LIST.map((data,i)=>{
					if(data.id === id){
//						console.log(data.name)
						this.Article = store.state.LIST[i]
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
				store.state.LIST[index].love = Number(store.state.LIST[index].love)+1;
				e.target.setAttribute('style','color:red');
				store.state.like.push(store.state.LIST[index])
			},
			cai(index,e){
				e = event || ''
				store.state.LIST[index].hate = Number(store.state.LIST[index].hate)+1;
				e.target.setAttribute('style','color:red');
			}
		},
		computed:{
			dataList(){
//				console.log(store.state.LIST)
				return store.state.LIST
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
	.res span{padding:0 0.5rem;height: 100%;}
	.res span i{color: #CCCCCC ;}
	.res span b{font-weight: normal;font-size: 0.6rem;margin-left: 0.6rem;color: #898989;}
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
	#voice{width: 100%;padding: 0 0.5rem;height: 3rem;}
	#voice img{height: 100%;float: left;}
	#voice div{height:100%;display: flex;flex-direction: column;justify-content: center;}
</style>