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
      state.account.authenticate = data.authenticate;
      state.account.token = data.token;
      state.account.id = data.id;
      state.account.nombres = data.nombres;
      state.account.apellido_paterno = data.apellido_paterno;
      localStorage.setItem("authenticate",data.authenticate);
      localStorage.setItem("token",data.token);
      localStorage.setItem("id",data.id);
      localStorage.setItem("nombres",data.nombres);
      localStorage.setItem("apellido_paterno",data.apellido_paterno);
    },
    deleteSession(state){
      state.account.authenticate = false;
      localStorage.removeItem("authenticate");
      state.account.token = null; 
      localStorage.removeItem("token");
      state.account.id = null; 
      localStorage.removeItem("id");
      state.account.name = null; 
      localStorage.removeItem("nombres");
      state.account.surname = null; 
      localStorage.removeItem("apellido_paterno");
    },
    checkSession(state){
      let active = localStorage.getItem("authenticate");
      if(active){
        state.account.authenticate = localStorage.getItem("authenticate");
        state.account.token = localStorage.getItem("token");
        state.account.name = localStorage.getItem("nombres");
        state.account.surname = localStorage.getItem("apellido_paterno");
      }
    }
  },
  actions: {

  }
})
