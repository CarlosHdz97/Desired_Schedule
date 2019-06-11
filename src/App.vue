<template id="template">
  <div id="app" class="container-fluid" :style="[styles]">
    <b-navbar toggleable="lg" type="light" variant="light" v-if="authenticate">
      <b-navbar-brand><router-link to="/" class="text-dark nav-link">Desired Schedule</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/preference" class="nav-link">Preferencias</router-link>
          <router-link to="/disponibilidad" class="nav-link">Disponibilidad</router-link>
          <router-link to="/horario" class="nav-link">Horario</router-link>
          <router-link to="/profesor" class="nav-link">Profesor</router-link>
          <router-link to="/materia" class="nav-link">Materia</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto text-right">
            <a class="nav-link" @click="logOut"><font-awesome-icon icon="sign-out-alt" class="fa-lg"/></a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
    <footer id="footer"  class="footer row align-items-center text-left text-light">
      <div class="col-md d-sm-none d-none d-md-block">
        <span>
          <small> UNIDAD PROFESIONAL INTERDISCIPLINARIA DE INGENIERIA CIENCIAS SOCIALES Y ADMINISTRATIVAS </small><br>
          <strong> UPIICSA</strong>
        </span>
      </div>
      <div class="col-md text-md-right">
        <span>
          <strong><em>Desired Schedule</em></strong><br>
          <small>Proyecto &copy; 2019</small>
        </span>
      </div>
    </footer>
  </div>
</template>

<style>
template {
  position: relative;
  min-height: 100%;
  margin: 0%;
  padding: 0%;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #78184a;
}
form{
  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px 5px 15px #d6d6d6;
}
</style>

<script>
import {mapMutations} from 'vuex'
export default {
  data(){
    return{
      heightFooter : 0,
      styles: {
        'margin-bottom' : 0,
      }
    }
  },
  created(){
    this.recoverySessionData();
  },
  computed:{
    authenticate(){
     return this.$store.state.account.authenticate;
    }
  },
  mounted(){
    this.calcularHeightFooter();
  },
  methods:{
    ...mapMutations(['deleteSession']),
    recoverySessionData(){
      this.$store.commit('checkSession');
    },
    calcularHeightFooter(){
      this.heightFooter = document.getElementById("footer").clientHeight;
      this.styles["margin-bottom"] = this.heightFooter+10+'px';
    },
    logOut(){
      alert('Ha cerrado su sesión con éxito!')
      this.$store.commit('deleteSession');
      this.$router.push({path:'/'});
    }
  }
}
</script>

