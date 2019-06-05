<template>
    <div>
        <form class="p-3">
            <p class="text-dark h4">Preferencias</p>
            <div class="form-row justify-content-around">
                <p class="text-secondary text-justify"><b>**</b>Añada como máximo 5 materias de su academia de adscripción que le gustaria impartir en el orden de su preferencia</p>
                <div class="form-group col-md-5">
                        <label>Academia de adscripción:</label>
                        <select class="custom-select" v-model="academia" disabled>
                            <option v-for="option in academias" :value="option.id" :key="option.id">{{option.text}}</option>
                        </select>
                </div>
                <div class="form-group col-md-6">
                        <label>Materias<strong class="text-info">(*)</strong>:</label>
                        <div class="input-group">
                        <!--<model-select :options="materias" v-model="materia"></model-select>-->
                        <select class="custom-select" v-model="materia" @change="addSubject(materia)">
                            <option v-for="option in materias" :value="option.id" :key="option.id">{{option.text}}</option>
                        </select>
                        <span class="input-group-text"><font-awesome-icon icon="search"/></span>
                    </div>
                </div>
            </div>
            <div class="form-row justify-content-around">
                <div class="form-group col-md-10">
                    <label><strong>Materias de la academia:</strong></label>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            INGENIERIA DEL CONOCIMIENTO
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            DISEÑO DE PROYECTOS DE SISTEMAS INFORMATICOS
                            <span class="badge badge-primary badge-pill">2</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            INGENIERIA DE SOFTWARE
                            <span class="badge badge-primary badge-pill">3</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            DISEÑO DE SISTEMAS
                            <span class="badge badge-primary badge-pill">4</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            AUDITORIA INFORMATICA
                            <span class="badge badge-primary badge-pill">5</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="form-row justify-content-end">
                <p class="text-secondary text-right"><b>**</b>Añada como máximo 5 materias de cualquier academia que le gustaria impartir en el orden de su preferencia</p>
                <div class="form-group col-md-6">
                    <label>Materias<strong class="text-info">(*)</strong>:</label>
                    <div class="input-group">
                        <select class="custom-select" v-model="materia">
                            <option v-for="option in materias" :value="option.id" :key="option.id">{{option.text}}</option>
                        </select>
                        <span class="input-group-text"><font-awesome-icon icon="search"/></span>
                    </div>
                </div>
            </div>
            <div class="form-row justify-content-around">
                <div class="form-group col-md-10">
                    <label><strong>Materias de la academia:</strong></label>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            INGENIERIA DEL CONOCIMIENTO
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            DISEÑO DE PROYECTOS DE SISTEMAS INFORMATICOS
                            <span class="badge badge-primary badge-pill">2</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            INGENIERIA DE SOFTWARE
                            <span class="badge badge-primary badge-pill">3</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            DISEÑO DE SISTEMAS
                            <span class="badge badge-primary badge-pill">4</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            AUDITORIA INFORMATICA
                            <span class="badge badge-primary badge-pill">5</span>
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                materias:[],
                academias:[
                    {text: 'Informática', id: 1, 
                    materias:[
                        {text: 'materia 1', id: 1},
                        {text: 'materia 2', id: 2},
                        {text: 'materia 3', id: 3},
                    ]},
                    {text: 'Computación', id: 2, materias:[
                        {text: 'materia 4', id: 4},
                        {text: 'materia 5', id: 5},
                        {text: 'materia 6', id: 6},
                    ]},
                ],
                academia:1,
                materia:2,
            }
        },
        mounted(){
            this.selectMaterias();
        },
        computed: {
        },
        methods: {
            selectMaterias(){
                var academia = this.academias.filter(academia => academia.id == this.academia);
                this.materias = academia[0]["materias"];
            },
            addSubject(materia){
                alert(materia);
            }
        }
    }
</script>