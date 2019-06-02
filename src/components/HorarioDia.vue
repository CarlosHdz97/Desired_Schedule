<template>
    <div>
        <b-form class="p-4 m-2">
            <b-form-group label="Dia: ">
                <b-form-select v-model="form.dia" :options="options_days"></b-form-select>
            </b-form-group>
            <b-form-group label="Turno: ">
                <b-form-select v-model="form.turno" :options="options_turno"></b-form-select>
            </b-form-group>
            <b-form-group label="Inicio: ">
                 <b-form-input type="time" v-model="form.inicio" required step="1800" min="7:00" max="14:00"></b-form-input>
            </b-form-group>
            <b-form-group label="Fin: ">
                <b-form-input type="time" v-model="form.fin" required step="1800" min="7:00" max="14:00"></b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-end">
                <b-button-group class="d-block">
                    <b-button type="reset" variant="danger">Cancelar</b-button>
                    <b-button type="submit" variant="primary">Guardar</b-button>
                </b-button-group>
            </div>
        </b-form>
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
                {value: "Vespertino", text: "Vespertino"}
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