import { MessageBox } from 'mint-ui'

var TodoAction = {
	loginAction(store,value){
		console.log(value.username,value.password)
		fetch('http://datainfo.duapp.com/shopdata/userinfo.php?status=login&&userID='+value.username+'&&password='+value.password).then((response)=>{
			let loginData = {response:response,that:value.that};
			store.commit("loginMutation",loginData);
		})
	},
	registerAction:function(store,value){
		fetch('http://datainfo.duapp.com/shopdata/userinfo.php',{
			method:'POST',
			headers:{
				"Content-Type":"application/x-www-form-urlencoded"
			},
			body:
				"status=register&userID="+value.username+"&password="+value.password
		}).then((response)=>{
			console.log(value)
			console.log(response);
			response.text().then((responseText)=>{
				console.log(responseText);
				if(responseText == 1){
					MessageBox.alert('注册成功，请登录！').then(() => {
//						store.commit("addMutation",value.username)
//						value.that.$router.push('/LoginInfo');
					});
				}
			})
		})
	},
	gloAction(store,value){
		store.commit('gloMutation',value);
	},
	listAction(store){
//		console.log( typeof value)
		fetch('http://route.showapi.com/255-1?showapi_appid=56155&showapi_sign=0976f9725c754d4c99bbb025afbba72e').then((response)=>{
//			console.log(response);
			let info = {response:response,that:this};
			store.commit('listMutation',info);
		})
	},
	moreAction(store,value){
//		console.log(value)
		fetch('http://route.showapi.com/255-1?showapi_appid=56155&showapi_sign=0976f9725c754d4c99bbb025afbba72e&page='+value).then((response)=>{
//			console.log(response);
			let info = {response:response,that:this};
			store.commit('moreMutation',info);
		})
	},
	moreVideoAction(store,value){
//		console.log(value)
		fetch('http://route.showapi.com/255-1?showapi_appid=56155&showapi_sign=0976f9725c754d4c99bbb025afbba72e&type=41&page='+value).then((response)=>{
//			console.log(response);
			let info = {response:response,that:this};
			store.commit('moreVideoMutation',info);
		})
	},
	moreImagesAction(store,value){
//		console.log(value)
		fetch('http://route.showapi.com/255-1?showapi_appid=56155&showapi_sign=0976f9725c754d4c99bbb025afbba72e&type=10&page='+value).then((response)=>{
//			console.log(response);
			let info = {response:response,that:this};
			store.commit('moreImagesMutation',info);
		})
	},
	moreAudioAction(store,value){
//		console.log(value)
		fetch('http://route.showapi.com/255-1?showapi_appid=56155&showapi_sign=0976f9725c754d4c99bbb025afbba72e&type=31&page='+value).then((response)=>{
//			console.log(response);
			let info = {response:response,that:this};
			store.commit('moreAudioMutation',info);
		})
	},
	moreJokeAction(store,value){
//		console.log(value)
		fetch('http://route.showapi.com/255-1?showapi_appid=56155&showapi_sign=0976f9725c754d4c99bbb025afbba72e&type=29&page='+value).then((response)=>{
//			console.log(response);
			let info = {response:response,that:this};
			store.commit('moreJokeMutation',info);
		})
	},
}

export default TodoAction;
