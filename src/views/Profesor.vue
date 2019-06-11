<template>
  <div class="row align-items-start justify-content-center mt-3" style="min-height:75vh">
      <span class="col-lg-7 col-md-8">
        <p class="text-dark h4">Profesor</p>
            <hr>
             <b-button @click="mostrar" variant="info">{{msg}}</b-button>
        <DataUserForm v-if="show"/>
      </span>
      <span class="col-lg-9 col-md-10">
        <RegistrosProfesores v-if="!show"/>
      </span>
  </div>
</template>


<script>
// @ is an alias to /src
import DataUserForm from '@/components/DataUserForm.vue'
import RegistrosProfesores from '@/components/RegistrosProfesores.vue'

export default {
    data(){
        return{
          show:false,
          msg:'Añadir'
        }
    },
    components:{
        DataUserForm,
        RegistrosProfesores
    },
    methods:{
      mostrar(){
        this.show=!this.show;
        if(this.show){
          this.msg='Cancelar';
          }else{
          this.msg='Añadir';
        }
      }
    }
}
</script>