<template id="template">
  <div id="app" class="container-fluid" :style="[styles]">
    <nav id="nav" class="row text-center">
      <div class="container">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
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
      this.styles["margin-bottom"] = this.heightFooter+2+'px';
    }
  }
}
</script>

