<template>
  <div class="row align-items-center justify-content-center" style="min-height:88vh">
      <span class=" col-lg-6 col-md-7">
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
                <span :class="classLogInTab" @click="logInStatus">Iniciar sesión</span>
            </li>
            <li class="nav-item">
                <span :class="classSignUpTab" @click="logInStatus">Registro</span>
            </li>
        </ul>
        <LogInForm :hidden="!logInForm"/>
        <DataUserForm :hidden="logInForm"/>
        <PreferenceUserForm hidden="true"/>
      </span>
  </div>
</template>


<script>
// @ is an alias to /src
import LogInForm from '@/components/LogInForm.vue'
import DataUserForm from '@/components/DataUserForm.vue'
import PreferenceUserForm from '@/components/PreferenceUserForm.vue'

export default {
    data(){
        return{
            logInForm: true,
            dataForm: false,
            preferenceForm: false,
            classLogInTab:{
                "nav-link": true,
                "active" : true
            },
            classSignUpTab:{
                "nav-link": true,
                "active" : false
            }
        }
    },
    components:{
        LogInForm,
        DataUserForm,
        PreferenceUserForm
    },
    methods:{
        logInStatus(){
           this.classLogInTab.active = !this.classLogInTab.active;
           this.classSignUpTab.active = !this.classSignUpTab.active;
           this.logInForm = !this.logInForm;
        },dataPreference(){
        }
    }
}
</script>
