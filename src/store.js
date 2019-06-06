import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url : 'http://localhost:8008/',
    account :{
      authenticate: false,
      token : null,
      id: null,
      name: null,
      surname: null
    }
  },
  mutations: {
    authentication(state, data){
      state.account = data;
      localStorage.setItem("authenticate",data.authenticate);
      localStorage.setItem("token",data.token);
      localStorage.setItem("id",data.id);
      localStorage.setItem("name",data.name);
      localStorage.setItem("surname",data.surname);
    },
    deleteSession(state){
      state.authenticate = false;
      localStorage.removeItem("authenticate");
      state.token = ''; 
      localStorage.removeItem("token");
      state.id = ''; 
      localStorage.removeItem("id");
      state.name = ''; 
      localStorage.removeItem("name");
      state.surname = ''; 
      localStorage.removeItem("surname");
    }
  },
  actions: {

  }
})
