<template>
  <div id="app" class="container-fluid" :style="[styles]">
    <nav id="nav" class="row text-center">
      <div class="container">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <p>{{heightFooter}}</p>
    <router-view/>
    <footer id="footer"  refs ="footer" class="footer row align-items-center text-center text-light">
      <div class="col-md d-none d-sm-block">
        <img src="./assets/ic_schedule.png" alt="Desired Schedule" height="100">
      </div>
      <div class="col-md">
        hola
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
    this.calcularHeightFooter()
  },
  methods:{
    calcularHeightFooter(){
      this.heightFooter = document.getElementById("footer").clientHeight;
      this.styles["margin-bottom"] = this.heightFooter+2+'px';
      console.log(this.styles);
    }
  }
}
</script>

