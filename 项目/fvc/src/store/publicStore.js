import state from './State/state.js'
import TodoMutation from './Mutations/TodoMutation.js'
import TodoAction from './Actions/TodoAction.js'
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

var store = new Vuex.Store({
	state:state,
	actions:TodoAction,
	mutations:TodoMutation
	
})

export default store;
