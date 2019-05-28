<template>
  <div class="row align-items-start justify-content-center mt-3" style="min-height:88vh">
      <span class=" col-lg-7 col-md-8">
        <MateriaForm/>
      </span>
  </div>
</template>


<script>
// @ is an alias to /src
import MateriaForm from '@/components/MateriaForm.vue'

export default {
    data(){
        return{
        }
    },
    components:{
        MateriaForm
    }
}
</script>