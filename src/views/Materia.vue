<template>
  <div class="row align-items-start justify-content-center mt-3" style="min-height:75vh">
      <span class="col-lg-7 col-md-8">
        <p class="text-dark h4">Materia </p><!--<font-awesome-icon icon="plus-circle" @click="change">-->
            <hr>
        <MateriaForm :hidden="!form"/>
      </span>
      <span class="col-lg-7 col-md-8">
        <RegistrosMaterias :hidden="form"/>
      </span>
  </div>
</template>


<script>
// @ is an alias to /src
import MateriaForm from '@/components/MateriaForm.vue'
import RegistrosMaterias from '@/components/RegistrosMaterias.vue'

export default {
    data(){
        return{
          form:true
        }
    },
    components:{
        MateriaForm,
        RegistrosMaterias
    },methods:{
        change(){
          this.form=!this.form;
        }
      }
    }
</script>