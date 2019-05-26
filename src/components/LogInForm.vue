<template>
    <div>
        <form class="p-3">
            <div class="form-group">
                <label>Correo electrónico <strong class="text-info">(*)</strong>:</label>
                <input type="email" class="form-control" placeholder="Ingrese su correo electrónico" required>
            </div>
            <div class="form-group">
                <label>Contraseña <strong class="text-info">(*)</strong>:</label>
                <div class="input-group">
                    <input :type="type_password" v-model="password" class="form-control" placeholder="Ingrese su correo electrónico" required>
                    <span class="input-group-text" @click="revealPassword"><font-awesome-icon :icon="ic_password"/></span>
                </div>
            </div>
            <div class="text-right">
                <button type="button" class="btn btn btn-primary" @click="logIn">Aceptar</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'LogInForm',
    data(){
        return{
            ic_password:'eye',
            type_password:'password',
            password:''
        }
    },
    methods:{
        logIn(){
            alert("Hola");
        },
        revealPassword(){
            if(this.ic_password=='eye'){
                this.ic_password = 'eye-slash';
                this.type_password = 'text';
            }else{
                this.ic_password = 'eye';
                this.type_password = 'password';
            }
        }
    }
}
</script>
