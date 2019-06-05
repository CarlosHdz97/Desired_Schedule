<template>
    <div>
        <form class="p-3">
            <div v-for="subject in materias" :key="subject.index">
                <button type="button" class="close" @click="removeSubject(subject)">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label>Clave <strong class="text-info">(*)</strong>:</label>
                        <input type="text" v-model="subject.cve" class="form-control" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Materia <strong class="text-info">(*)</strong>:</label>
                        <input type="text" v-model="subject.subject" class="form-control" placeholder="Ingrese el nombre de la materia" required>
                    </div>
                    <div class="form-group col-md-3">
                        <label>Horas semanales <strong class="text-info">(*)</strong>:</label>
                        <input type="number" v-model="subject.time" class="form-control" min="0" step=".5" required>
                    </div>
                    <hr>
                </div>
            </div>
            <div class="text-center">
                <b-button pill variant="primary" @click="addSubject">+</b-button>
            </div>
            <div class="text-right mt-2">
                <b-alert show variant="warning" v-if="materias.length<1" class="text-justify">
                    <h4 class="alert-heading">No hay materias por agregar</h4>
                    <hr>
                    <p class="mb-0">Agrege al menos una materia para continuar</p>
                </b-alert>
                <button type="submit" class="btn btn btn-dark" v-if="materias.length>0">Guardar cambios</button>
            </div>
        </form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ materias }}</pre>
        </b-card>
    </div>
</template>
<script>
export default {
    name: 'MateriaForm',
    data(){
        return{
            counter:1,
            materias: [
                {index:1, cve:'', subject:'', time:''}
                ]
        }
    },
    mounted(){
    },
    methods:{
        addSubject(){
            this.counter +=1;
            this.materias.push({index: this.counter, cve:'', subject: '', time:''});
        },
        removeSubject(subject){
            var index = this.materias.map(function (materia) { return materia.index;}).indexOf(subject.index);
            this.materias.splice(index,1);
        }
    }
}
</script>
