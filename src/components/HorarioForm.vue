<template>
    <div>
        <form class="p-3">
            <p class="text-dark h4">Materia</p>
            <hr style="border: solid .3px #78184a;">
            <div class="form-row">
                <div class="form-group col-md-2">
                    <label>Secuencia<strong class="text-info">(*)</strong>: </label>
                    <input type="text" class="form-control" required>
                </div>
                <div class="form-group col-md-3">
                    <label>Materia <strong class="text-info">(*)</strong>:</label>
                    <select class="custom-select">
                        <option v-for="option in materias" :value="option.id" :key="option.id" required>{{option.nombre}}</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label>Profesor:</label>
                    <select class="custom-select">
                        <option v-for="option in profesores" :value="option.id" :key="option.id">{{option.apellido_paterno+' '+option.apellido_materno+' '+option.nombres}}</option>
                    </select>
                </div>
                <div class="form-group col-md-1">
                    <label>Salon:</label>
                    <input type="text" class="form-control" min="0">
                </div>
                <div class="form-group col-md-1">
                    <label>Cupo:</label>
                    <input type="text" class="form-control" min="0">
                </div>
                <div class="form-group col-md-1">
                    <label>Inscritos:</label>
                    <input type="text" class="form-control" min="0">
                </div>
            </div>
            <p class="text-secondary h5">Horarios</p>
            <div class="form-row justify-content-around">
                <div class="form-group col-md-2">
                    <label><b>Lunes:</b></label><br>
                    <label>Inicio: </label>
                    <input type="time" step="9000" class="form-control">
                    <label>Termino: </label>
                    <input type="time" step="9000" class="form-control">
                </div>
                <div class="form-group col-md-2">
                    <label><b>Martes: </b></label><br>
                    <label>Inicio: </label>
                    <input type="time" step="9000" class="form-control">
                    <label>Termino: </label>
                    <input type="time" step="9000" class="form-control">
                </div>
                <div class="form-group col-md-2">
                    <label><b>Miercoles:</b></label><br>
                    <label>Inicio: </label>
                    <input type="time" step="9000" class="form-control">
                    <label>Termino: </label>
                    <input type="time" step="9000" class="form-control">
                </div>
                <div class="form-group col-md-2">
                    <label><b>Jueves:</b></label><br>
                    <label>Inicio: </label>
                    <input type="time" step="9000" class="form-control">
                    <label>Termino: </label>
                    <input type="time" step="9000" class="form-control">
                </div>
                <div class="form-group col-md-2">
                    <label><b>Viernes:</b></label><br>
                    <label>Inicio: </label>
                    <input type="time" step="9000" class="form-control">
                    <label>Termino: </label>
                    <input type="time" step="9000" class="form-control">
                </div>
            </div>
            <hr>
            <div class="text-right">
                <button type="submit" class="btn btn btn-dark">Guardar cambios</button>
            </div>
        </form>
    </div>
</template>
<script>
import VueAxios from 'vue-axios';
import axios from 'axios';
export default {
    name: 'MateriaForm',
    data(){
        return{
            materias:[],
            profesores:[]

        }
    },
    created(){
        this.getMaterias();
        this.getProfesores();
    },
    mounted(){
    },
    methods:{
        getMaterias(){
            this.axios.get(this.$store.state.url+"materia")
            .then(res=>{
                this.materias = res.data;
            })
        },
        getProfesores(){
            this.axios.get(this.$store.state.url+"user")
            .then(res=>{
                this.profesores = res.data;
            })
        }
    }
}
</script>
