<template>
  <div class="row align-items-start justify-content-center mt-3" style="min-height:88vh">
      <span class=" col-lg-10 col-md-11">
        <DisponibilidadForm/>
      </span>
  </div>
</template>


<script>
// @ is an alias to /src
import DisponibilidadForm from '@/components/DisponibilidadForm.vue'

export default {
    data(){
        return{
        }
    },
    components:{
        DisponibilidadForm
    }
}
</script>