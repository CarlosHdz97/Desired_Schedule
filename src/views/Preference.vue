<template>
  <div class="row align-items-center justify-content-center" style="min-height:75vh">
      <span class=" col-lg-7 col-md-8">
        <PreferenceUserForm/>
      </span>
  </div>
</template>


<script>
// @ is an alias to /src
import PreferenceUserForm from '@/components/PreferenceUserForm.vue'

export default {
    data(){
        return{
        }
    },
    components:{
        PreferenceUserForm
    }
}
</script>