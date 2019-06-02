<template>
  <div class="row align-items-start justify-content-center mt-3" style="min-height:88vh">
      <span class=" col-lg-10 col-md-11">
        <HorarioForm/>
      </span>
  </div>
</template>


<script>
// @ is an alias to /src
import HorarioForm from '@/components/HorarioForm.vue'

export default {
    data(){
        return{
        }
    },
    components:{
        HorarioForm
    }
}
</script>