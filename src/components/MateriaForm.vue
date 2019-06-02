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
            <div class="text-right">
                <button type="submit" class="btn btn btn-dark">Guardar cambios</button>
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
            materias: [
                {index:1, cve:'001', subject: 'Ingles', time:'2'}
                ]
        }
    },
    mounted(){
    },
    methods:{
        addSubject(){
            let index = this.materias.length+1;
            this.materias.push({index: index, cve:'', subject: '', time:''});
        },
        removeSubject(subject){
            var index = this.materias.map(function (materia) { return materia.index;}).indexOf(subject.index);
            this.materias.splice(index,1);
        }
    }
}
</script>
