<template>
  <div class="row align-items-start justify-content-center mt-3" style="min-height:75vh">
      <span class="col-lg-7 col-md-8">
        <p class="text-dark h4">Profesor</p>
            <hr>
        <DataUserForm :hidden="Form"/>
      </span>
      <span class="col-lg-9 col-md-10">
        <RegistrosProfesores/>
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
          
        }
    },
    components:{
        DataUserForm,
        RegistrosProfesores
    }
}
</script>