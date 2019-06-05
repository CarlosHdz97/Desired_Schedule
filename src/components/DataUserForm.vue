<template>
    <div>
        <form class="p-3" v-on:submit.prevent="addData">
            <p class="text-dark h4">Datos generales</p>
            <hr>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Apellido Paterno <strong class="text-info">(*)</strong>:</label>
                    <input type="text" class="form-control" placeholder="Ingrese su apellido paterno" required v-model="userData.apellido_paterno">
                </div>
                <div class="form-group col-md-6">
                    <label>Apellido materno:</label>
                    <input type="text" class="form-control" placeholder="Ingrese su apellido materno" v-model="userData.apellido_materno">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Nombre(s) <strong class="text-info">(*)</strong>:</label>
                    <input type="text" class="form-control" placeholder="Ingrese su nombre" required v-model="userData.nombres">
                </div>
                <div class="form-group col-md-6">
                    <label>CURP <strong class="text-info">(*)</strong>:</label>
                    <input type="text" class="form-control" placeholder="Ingrese su CURP" required v-model="userData.curp">
                    <p class="text-right p-0"><a href="https://www.gob.mx/curp/" target="_blank">¿No conoces tu CURP?</a></p>
                </div>
            </div>
            <p class="text-dark h4">Datos academicos</p>
            <hr>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Nivel máximo de estudios<strong class="text-info">(*)</strong>:</label>
                    <b-form-select :options="options_niveles_estudio" required v-model="userData.nivel_academico"></b-form-select>
                </div>
                <div class="form-group col-md-6">
                    <label>Licenciatura en <strong class="text-info">(*)</strong>:</label>
                    <input type="text" class="form-control" placeholder="Ingrese su formación academica" required v-model="userData.formacion_academica">
                </div>
            </div>
            <p class="text-dark h4">Datos de contacto</p>
            <hr>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Correo electrónico <strong class="text-info">(*)</strong>:</label>
                    <input type="text" class="form-control" placeholder="Ingrese su correo electrónico" required v-model="userData.email">
                </div>
                <div class="form-group col-md-6">
                    <label>Celular <strong class="text-info">(*)</strong>:</label>
                    <input type="text" class="form-control" placeholder="Ingrese su celular" required v-model="userData.celular">
                </div>
            </div>
            <p class="text-dark h4">Datos laborales</p>
            <hr>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Dictamen categoría docente <strong class="text-info">(*)</strong>:</label>
                    <b-form-select :options="options_dictamen" required v-model="userData.dictamen_categoria_docente"></b-form-select>
                </div>
                <div class="form-group col-md-6">
                    <label>Horas nombramiento <strong class="text-info">(*)</strong>:</label>
                    <select class="custom-select" required v-model="userData.horas_nombramiento">
                        <option v-for="option in options_hrs" :value="option.value" :key="option.value">{{option.text}}</option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label>Academia de adscripción<strong class="text-info">(*)</strong>:</label>
                    <select class="custom-select" required v-model="userData.academia">
                        <option v-for="option in options_academias" :value="option.value" :key="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
            <p class="text-dark h4">Contraseña</p>
            <hr>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Contraseña <strong class="text-info">(*)</strong>:</label>
                    <div class="input-group">
                        <input :type="type_password" v-model="userData.password" class="form-control"  required @input="validatePassword">
                        <span class="input-group-text" @click="revealPassword"><font-awesome-icon :icon="ic_password"/></span>
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label>Confirmar contraseña <strong class="text-info">(*)</strong>:</label>
                    <div class="input-group">
                        <input :type="type_confirm_password" v-model="confirm_password" class="form-control" required @input="validatePassword">
                        <span class="input-group-text" @click="revealConfirmPassword"><font-awesome-icon :icon="ic_confirm_password"/></span>
                    </div>
                </div>
            </div>
            <div class="text-right">
                <button type="submit" class="btn btn btn-dark">Guardar</button>
                <router-link to="/" class="btn btn btn-danger ml-3">Cancelar</router-link>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'DataUserForm',
    data(){
        return{
            horas:'',
            academia: '',
            options_hrs:[
                {text: '1 Hora', value: 1}
            ],options_academias:[
                {text: 'Informatica', value: 1},
                {text: 'Computación', value: 2},
            ],
            password:'',
            confirm_password:'',
            msg_err:'',
            ic_password:'eye-slash',
            ic_confirm_password: 'eye-slash',
            type_password:'password',
            type_confirm_password:'password',
            options_niveles_estudio:[
                {text: 'Educación básica', value: 'Educación básica'},
                {text: 'Bachillerato sin carrera técnica', value: 'Bachillerato sin carrera técnica'},
                {text: 'Bachillerato con carrera técnica', value: 'Bachillerato con carrera técnica'},
                {text: 'Licenciatura', value: 'Licenciatura'},
                {text: 'Maestría', value: 'Maestría'},
                {text: 'Doctorado', value: 'Doctorado'},
            ],
            options_dictamen:[
                {text: 'Titular A', value: 'Titular A'},
                {text: 'Titular B', value: 'Titular B'},
                {text: 'Titular C', value: 'Titular C'},
                {text: 'Asociado A', value: 'Asociado A'},
                {text: 'Asociado B', value: 'Asociado B'},
                {text: 'Asociado C', value: 'Asociado C'},
                {text: 'Asistente A', value: 'Asistente A'},
                {text: 'Asistente B', value: 'Asistente B'},
                {text: 'Asistente C', value: 'Asistente C'},
            ],
            userData:{
                curp:'',
                apellido_paterno:'',
                apellido_materno:'',
                nombres: '',
                celular: '',
                email: '',
                nivel_academico: '',
                formacion_academica: '',
                horas_nombramiento: '',
                dictamen_categoria_docente: '',
                rol_id: 2,
                password: ''
            }
        }
    },
    mounted(){
        this.generateOptions();
    },
    methods:{
        addData(){
            let url = this.$store.state.url;
            this.axios.post(url+"user", this.userData)
            .then(res => {
                alert("Usuario registrado exitosamente");
            })
            .catch(err => console.log(err));
        },
        generateOptions(){
            for(var i=2; i<=40; i++){
                this.options_hrs.push({text: i+' Horas', value: i});
            }
        },
        validatePassword(){
            if(this.userData.password!='' && this.confirm_password!=''){
                if(this.userData.password!=this.confirm_password){
                    this.msg_err = 'Las contraseñas no son las mismas';
                }else{
                    this.msg_err ="";
                }
            }else if(this.confirm_password==''){
                this.msg_err = 'Campo vacio';
            }else{
                this.msg_err = 'Campo vacio';
            }
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
        revealConfirmPassword(){
            if(this.ic_confirm_password=='eye'){
                this.ic_confirm_password = 'eye-slash';
                this.type_confirm_password = 'password';
            }else{
                this.ic_confirm_password = 'eye';
                this.type_confirm_password = 'text';
            }
        }
    }
}
</script>
