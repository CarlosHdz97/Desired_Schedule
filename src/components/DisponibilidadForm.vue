<template>
    <div>
        <b-form class="p-4 m-2">
            <b-form-group label="Turno: ">
                <b-form-select v-model="form.turno" :options="options_turno"></b-form-select>
            </b-form-group>
        </b-form>
        <b-row>
            <b-col cols="12" md="8">
                <b-tabs content-class="mt-3" fill>
                    <b-tab v-for="dia in options_days" :key="dia.value" :title="dia.text"><p>{{dia.text}}</p></b-tab>
                </b-tabs>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                dia : '',
                inicio: '07:00',
                fin : '14:00',
                turno : ''
            },
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
            ]
        }
    }
}
</script>
