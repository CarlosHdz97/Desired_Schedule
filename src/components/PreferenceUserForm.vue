<template>
    <div>
        <form class="p-3">
            <p class="text-dark h4">Preferencias</p>
            <div class="form-row justify-content-around">
                <div class="form-group col-md-5">
                        <label>Academia de adscripción:</label>
                        <select class="custom-select" v-model="academia" disabled>
                            <option v-for="option in academias" :value="option.id" :key="option.id">{{option.nombre}}</option>
                        </select>
                </div>
                <div class="form-group col-md-6">
                        <label>Materias<strong class="text-info">(*)</strong>:</label>
                        <div class="input-group">
                        <!--<model-select :options="materias" v-model="materia"></model-select>-->
                        <select class="custom-select" v-model="materia" @change="addSubject(materia)">
                            <option v-for="option in materias" :value="option.id" :key="option.id">{{option.nombre}}</option>
                        </select>
                        <span class="input-group-text"><font-awesome-icon icon="search"/></span>
                    </div>
                </div>
            </div>
            <div class="form-row justify-content-around">
                <div class="form-group col-md-10">
                    <label><strong>Materias de la academia:</strong></label>
                    <b-list-group>
                        <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="materia in materias_selected" :key="materia.id">
                            {{materia.name}}
                            <b-badge variant="primary" pill>{{materia.prioridad}}</b-badge>
                        </b-list-group-item>
                        <b-alert show v-if="materias_selected.length<5">
                            <p class="text-justify">Añada como máximo 5 materias de su academia de adscripción que le gustaría impartir en el orden de su preferencia</p>
                        </b-alert>
                    </b-list-group>
                </div>
            </div>
            <div class="form-row justify-content-end">
                <div class="form-group col-md-6">
                    <label>Materias<strong class="text-info">(*)</strong>:</label>
                    <div class="input-group">
                        <select class="custom-select" v-model="materia_other_academy" @change="addSubjectOtherAcademy(materia_other_academy)">
                            <option v-for="option in materias_other_academy" :value="option.id" :key="option.id">{{option.text}}</option>
                        </select>
                        <span class="input-group-text"><font-awesome-icon icon="search"/></span>
                    </div>
                </div>
            </div>
            <div class="form-row justify-content-around">
                <div class="form-group col-md-10">
                    <label><strong>Materias de otras academias:</strong></label>
                    <b-alert show dismissible>
                        <p>Si usted lo desea añada como máximo 5 materias de otras academias que le gustaría impartir en el orden de su preferencia</p>
                    </b-alert>
                    <b-list-group>
                        <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="materia in materias_selected_other_academy" :key="materia.id">
                            {{materia.name}}
                            <b-badge variant="primary" pill>{{materia.prioridad}}</b-badge>
                        </b-list-group-item>
                    </b-list-group>
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
                materias_other_academy:[],
                
                academias:[
                    {text: 'Informática', id: 1, 
                    materias:[
                        {text: 'materia 1', id: 1},
                        {text: 'materia 2', id: 2},
                        {text: 'materia 3', id: 3},
                        {text: 'materia 4', id: 4},
                        {text: 'materia 5', id: 5},
                        {text: 'materia 6', id: 6},
                        {text: 'materia 7', id: 7},
                        {text: 'materia 8', id: 8},
                        {text: 'materia 9', id: 9},
                        {text: 'materia 10', id: 10},
                    ]},
                    {text: 'Computación', id: 2, 
                    materias:[
                        {text: 'materia 11', id: 11},
                        {text: 'materia 12', id: 12},
                        {text: 'materia 13', id: 13},
                    ]},
                    {text: 'Computación', id: 3, 
                    materias:[
                        {text: 'materia 14', id: 14},
                        {text: 'materia 15', id: 15},
                        {text: 'materia 16', id: 16},
                    ]},
                ],
                academia:1,
                materia:'',
                materia_other_academy: '',
                materias_selected:[],
                materias_selected_other_academy:[]
            }
        },
        mounted(){
            this.selectMaterias();
            this.selectMateriasOtherAcademy();
        },
        computed: {
        },
        created(){
            this.getMaterias();
        },
        methods: {
            selectMaterias(){
                var academia = this.academias.filter(academia => academia.id == this.academia);
                this.materias = academia[0]["materias"];
            },
            selectMateriasOtherAcademy(){
                var academias = this.academias.filter(academia => academia.id != this.academia);
                academias.forEach(academia => {
                    academia.materias.forEach(materia =>{
                        this.materias_other_academy.push(materia);
                    }); 
                });
            },
            addSubject(subject){
                if(this.materias_selected.length<5){
                    if(this.materias_selected.length==4){
                        alert("Se han agregado sus 5 materias de forma correcta");
                    }
                    var index = this.materias.map(function (materia) { return materia.id;}).indexOf(subject);
                    this.materias_selected.push({id:this.materias[index].id, name: this.materias[index].text, prioridad:this.materias_selected.length+1});
                    this.removeSubject(this.materias[index]);
                }else{
                    alert('Usted ya ha seleccionado sus 5 materias.');
                }
            },            
            removeSubject(subject){
                var index = this.materias.map(function (materia) { return materia.id;}).indexOf(subject.id);
                this.materia='';
                this.materias.splice(index,1);
            },
            addSubjectOtherAcademy(subject){
                if(this.materias_selected_other_academy.length<5){
                    if(this.materias_selected_other_academy.length==4){
                        alert("Se han agregado sus 5 materias de forma correcta");
                    }

                    var index = this.materias_other_academy.map(function (materia) { return materia.id;}).indexOf(subject);
                    this.materias_selected_other_academy.push({id:this.materias_other_academy[index].id, name: this.materias_other_academy[index].text, prioridad:this.materias_selected_other_academy.length+1});
                    this.removeSubjectOtherAcademy(this.materias_other_academy[index]);
                }else{
                    alert('Usted ya ha seleccionado sus 5 materias.');
                }
            },
            removeSubjectOtherAcademy(subject){
                var index = this.materias_other_academy.map(function (materia) { return materia.id;}).indexOf(subject.id);
                this.materia_other_academy='';
                this.materias_other_academy.splice(index,1);
            },
            getMaterias(){
                this.axios.get(this.$store.state.url+"materia")
                .then(res=>{
                    console.log(res.data)
                    this.materias = res.data;
                })
            }
        }
    }
</script>