<template>
    <div>
        <b-form class="p-4 m-2">
            <b-form-group label="Turno: ">
                <b-form-select v-model="form.turno" :options="options_turno" @change="generateHorario"></b-form-select>
            </b-form-group>
        </b-form>
        <b-row>
            <b-col cols="4" md="2" class="mt-5">
                <b-list-group class="text-center">
                    <b-list-group-item v-for="horas in horario" :key="horas.value">{{horas.value + ':00 Hrs'}}</b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col cols="8" md="10">
                 <b-table striped hover :items="dias"></b-table>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            horario:[],
            form:{
                turno:'Matutino'
            },
            turno_horario: '7:00-2:00',
            options_turno:[
                {value: "Matutino", text: "Matutino"},
                {value: "Vespertino", text: "Vespertino"},
                {value: "Mixto", text: "Mixto"}
            ],
            options_days:[
                {value: "Lunes", text: "Lunes"},
                {value: "Martes", text: "Martes"},
                {value: "Miercoles", text: "Miercoles"},
                {value: "Jueves", text: "Jueves"},
                {value: "Viernes", text: "Viernes"},
            ],
            dias:[
                {'Día': "Lunes", horario:[]},
                {'Día': "Martes", horario:[]},
                {'Día': "Miercoles", horario:[]},
                {'Día': "Jueves", horario:[]},
                {'Día': "Viernes", horario:[]},
            ],
            i:0
        }
    },
    created(){
        this.checkTurno()
        this.generateHorario()
    },
    computed:{
    },
    methods:{
        checkTurno(){
            console.log(localStorage.turno);
            if(localStorage.turno){
                this.form.turno = localStorage.turno;
            }
        },
        generateHorario(){
            this.horario= [];
           if(this.form.turno=="Matutino"){
               localStorage.turno = "Matutino";
                this.dias.forEach(dia => {
                    dia.horario='7:00Hrs - 3:00 Hrs';    
                });
            }else if(this.form.turno=="Vespertino"){
                localStorage.turno = "Vespertino";
                this.dias.forEach(dia => {
                    dia.horario='2:00Hrs - 10:00 Hrs';    
                });
            }else{
                localStorage.turno = "Mixto";
               this.dias.forEach(dia => {
                    dia.horario='7:00Hrs - 10:00 Hrs';    
                });
            }
            this.i++
            if(this.i>1){
                alert("Se han guardado los cambios");
            }
        }
    }
}
</script>
