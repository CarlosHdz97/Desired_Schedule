<template>
    <div>
        <form class="p-3"  @submit="logIn">
            <b-form-group>
                <label>{{txt_input_email}} <strong class="text-info">(*)</strong>:</label>
                <input type="email" class="form-control" placeholder="Ingrese su correo electrónico" required>
            </b-form-group>
            <div class="form-group" v-show="!recoveryPassword">
                <label>Contraseña <strong class="text-info">(*)</strong>:</label>
                <div class="input-group">
                    <input :type="type_password" v-model="password" class="form-control" placeholder="Ingrese su contraseña" required>
                    <span class="input-group-text" @click="revealPassword"><font-awesome-icon :icon="ic_password"/></span>
                </div>
                <p class="text-right text-primary mt-1"><u style="cursor:pointer;" @click="showRecoveryForm">No recuerdo mi contraseña</u></p>
            </div>
            <div class="text-right">
                <button type="submit" class="btn btn btn-primary">Aceptar</button>
                <b-button class="btn btn btn-danger ml-3" @click="cancelForm">Cancelar</b-button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'LogInForm',
    data(){
        return{
            txt_input_email: 'Correo electrónico',
            recoveryPassword: false,
            ic_password: 'eye-slash',
            type_password: 'password',
            password: ''
        }
    },
    methods:{
        logIn(){
            alert("Bienvenido");
        },
        revealPassword(){
            if(this.ic_password=='eye'){
                this.ic_password = 'eye-slash';
                this.type_password = 'password';
            }else{
                this.ic_password = 'eye';
                this.type_password = 'text';
            }
        },
        showRecoveryForm(){
            this.txt_input_email = 'Correo electrónico de la cuenta que desea recuperar';
            this.recoveryPassword =  true;
        },
        cancelForm(){
            if(this.recoveryPassword == true){
                this.txt_input_email = 'Correo electrónico';
                this.recoveryPassword =  false;
            }else{
                this.$router.push({path:'/'});
            }
        }
    }
}
</script>
