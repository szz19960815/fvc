import Vue from 'vue'
import Router from 'vue-router'
import Groom from '@/components/Groom'
import Login from '@/components/Login'
import LoginInfo from '@/components/LoginInfo'
import List from '@/components/List'
import Video from '@/components/Video'
import Images from '@/components/Images'
import Audio from '@/components/Audio'
import Joke from '@/components/Joke'
import Like from '@/components/Like'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Groom',
      component: Groom,
      children: [
      	{
      		path:'/',
      		name:'List',
      		component:List
      	},
      	{
      		path:'/Video',
      		name:'Video',
      		component:Video
      	},
      	{
      		path:'/Images',
      		name:'Images',
      		component:Images
      	},
      	{
      		path:'/Audio',
      		name:'Audio',
      		component:Audio
      	},
      	{
      		path:'/Joke',
      		name:'Joke',
      		component:Joke
      	}
      ]
    },
    {
    	path: '/Groom',
    	name: 'Groom',
    	component: Groom
    },
    {
    	path: '/Login',
    	name: 'Login',
    	component: Login
    },
    {
    	path: '/LoginInfo',
    	name: 'LoginInfo',
    	component: LoginInfo
    },
    {
    	path:'/Like',
    	name: 'Like',
    	component: Like
    }
  ]
})
