<template>
  <div class="row align-items-center" style="min-height:75vh">
    <div class="col-md">
        <div class="jumbotron p-3">
          <h1 class="display-4 text-right">Sistema de asignación de materias</h1>
          <p class="lead text-justify">Sistema que permite la asignación de materias impartidas a los profesores de cada periodo escolar por la academia de informática de la UPIICSA.</p>
          <hr class="my-4">
          <div class="text-right">
            <router-link to="/logIn" class="btn btn-dark btn-lg" role="button"  v-if="!authenticate">Inicio de sesión</router-link>
          </div>  
        </div>
    </div>
    <div class="col-md d-sm-none d-none d-md-block text-center">
        <img src="../assets/upiicsa.jpg" alt="" width="100%">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      authenticate:false,
    }
  },
  create(){
    this.checkSession();
  },
  methods:{
    checkSession(){
      if(localStorage.getItem("authenticate")){
        this.authenticate = false;
      }
    }
  }
}
</script>
