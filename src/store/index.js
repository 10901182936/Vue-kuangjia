
import Vue from 'vue'
import Vuex from 'vuex'

export const ADD_NUM = 'ADD_NUM'   //递增

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabCheck:0,
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    [ADD_NUM] (state) {
      state.count++
    }
  },
  actions: {
    [ADD_NUM] ({commit}){
      commit(ADD_NUM)
    }
  }
})
