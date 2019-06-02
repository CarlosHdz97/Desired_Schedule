<template>
  <div class="row align-items-start justify-content-center mt-3" style="min-height:75vh">
      <span class="col-lg-7 col-md-8">
        <p class="text-dark h4">Recuperación de contraseña</p>
            <hr>
        <PasswordForm/>
      </span>
  </div>
</template>


<script>
// @ is an alias to /src
import PasswordForm from '@/components/PasswordForm.vue'

export default {
    data(){
        return{
          
        }
    },
    components:{
        PasswordForm,
    }
}
</script>