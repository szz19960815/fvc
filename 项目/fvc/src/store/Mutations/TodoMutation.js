import { MessageBox } from 'mint-ui'

var TodoMutation = {
	loginMutation(state,value){
		console.log("到达Mutation");
		value.response.text().then((responseText)=>{
			console.log(responseText)
			console.log(JSON.parse(responseText));
			if(JSON.parse(responseText) && JSON.parse(responseText)!=0 && JSON.parse(responseText)!= 2){
				MessageBox.alert('登录成功').then(() => {
					sessionStorage.setItem("username",JSON.parse(responseText).userID);
					let name = sessionStorage.getItem("username");console.log(name);
					value.that.$router.push('/Login');
				});
			}
		})
	},
	gloMutation(state,value){
		state.glo = value;
	},
	listMutation(state,value){
		value.response.text().then((responseText)=>{
//			console.log(JSON.parse(responseText).showapi_res_body.pagebean.contentlist)
			let List = JSON.parse(responseText).showapi_res_body.pagebean.contentlist;
//			console.log(List);
			state.LIST = List;
		})
	},
	moreMutation(state,value){
		value.response.text().then((responseText)=>{
//			console.log(JSON.parse(responseText).showapi_res_body.pagebean.contentlist)
			let List = JSON.parse(responseText).showapi_res_body.pagebean.contentlist;
//			console.log(List);
//			console.log(List)
			List.map((data,i)=>{
				this.state.LIST.push(data)
			})
//			console.log(state.LIST)
		})
	},
	moreVideoMutation(state,value){
		value.response.text().then((responseText)=>{
//			console.log(JSON.parse(responseText).showapi_res_body.pagebean.contentlist)
			let List = JSON.parse(responseText).showapi_res_body.pagebean.contentlist;
//			console.log(List);
//			console.log(List)
			List.map((data,i)=>{
				this.state.VIDEO.push(data)
			})
//			console.log(state.LIST)
		})
	},
	moreImagesMutation(state,value){
		value.response.text().then((responseText)=>{
//			console.log(JSON.parse(responseText).showapi_res_body.pagebean.contentlist)
			let List = JSON.parse(responseText).showapi_res_body.pagebean.contentlist;
//			console.log(List);
//			console.log(List)
			List.map((data,i)=>{
				this.state.IMG.push(data)
			})
//			console.log(state.LIST)
		})
	},
	moreAudioMutation(state,value){
		value.response.text().then((responseText)=>{
//			console.log(JSON.parse(responseText).showapi_res_body.pagebean.contentlist)
			let List = JSON.parse(responseText).showapi_res_body.pagebean.contentlist;
//			console.log(List);
//			console.log(List)
			List.map((data,i)=>{
				this.state.AUDIO.push(data)
			})
//			console.log(state.LIST)
		})
	},
	moreJokeMutation(state,value){
		value.response.text().then((responseText)=>{
//			console.log(JSON.parse(responseText).showapi_res_body.pagebean.contentlist)
			let List = JSON.parse(responseText).showapi_res_body.pagebean.contentlist;
//			console.log(List);
//			console.log(List)
			List.map((data,i)=>{
				this.state.JOKE.push(data)
			})
//			console.log(state.LIST)
		})
	}
}

export default TodoMutation;