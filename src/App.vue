<template id="template">
  <div id="app" class="container-fluid" :style="[styles]">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Desired Schedule</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/preference" class="nav-link">Preferencias</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Disponibilidad</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Horario</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profesores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Materias</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Periodos
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <footer id="footer"  class="footer row align-items-center text-center text-light">
      <div class="col-md d-sm-none d-none d-md-block">
        <!--
        <span>
          <small> UNIDAD PROFESIONAL INTERDISCIPLINARIA DE INGENIERIA CIENCIAS SOCIALES Y ADMINISTRATIVAS </small><br>
          <strong> UPIICSA</strong>
        </span>
        -->
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
export default {
  data(){
    return{
      heightFooter : 0,
      styles: {
        'margin-bottom' : 0,
      }
    }
  },
  mounted(){
    this.calcularHeightFooter();
  },
  methods:{
    calcularHeightFooter(){
      this.heightFooter = document.getElementById("footer").clientHeight;
      this.styles["margin-bottom"] = this.heightFooter+10+'px';
    }
  }
}
</script>

