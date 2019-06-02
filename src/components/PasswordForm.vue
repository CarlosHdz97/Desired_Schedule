<template>
    <div>
        <form class="p-3">
            <div class="form-group">
                <label>Contraseña<strong class="text-info">(*)</strong>:</label>
                <div class="input-group">
                    <input :type="type_password" v-model="password2" class="form-control" placeholder="Ingrese su cpntraseña" required>
                    <span class="input-group-text" @click="revealPassword"><font-awesome-icon :icon="ic_password"/></span>
                </div>
            </div>
            <div class="form-group">
                <label>Contraseña <strong class="text-info">(*)</strong>:</label>
                <div class="input-group">
                    <input :type="type_password" v-model="password" class="form-control" placeholder="Ingrese su cpntraseña" required>
                    <span class="input-group-text" @click="revealPassword"><font-awesome-icon :icon="ic_password"/></span>
                </div>
            </div>
            <div class="text-right">
                <button type="button" class="btn btn btn-primary">Aceptar</button>
                <router-link to="/" class="btn btn btn-danger ml-3">Cancelar</router-link>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'PasswordForm',
    data(){
        return{
            ic_password:'eye-slash',
            type_password:'password',
            password:'',
            password2:''
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
        }
    }
}
</script>
