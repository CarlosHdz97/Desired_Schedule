<template>
    <div>
        <table class="table table-striped table-responsive" id="detalles">
          <thead>
            <tr>
              <th scope="col">Reporte</th>
              <th scope="col">Materia</th>
              <th scope="col">Academia</th>
              <th scope="col">Horas semanales</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><button class="btn btn-dark"><font-awesome-icon icon="file-download"/></button></th>
              <th>Fundamentos de I.A</th>
              <th>Informática</th>
              <th>4 Horas y 30 minutos</th>
              <th><button class="btn btn-primary" onclick="mostrarForm(true);"><font-awesome-icon icon="pen-square"/></button></th>
              <th><button class="btn btn-danger" onclick="delete_item()"><font-awesome-icon icon="minus-circle"/></button></th>
            </tr>
            <tr>
              <th><button class="btn btn-dark"><font-awesome-icon icon="file-download"/></button></th>
              <th>Modelos de prueba de software</th>
              <th>Informática</th>
              <th>3 Horas</th>
              <th><button class="btn btn-primary" onclick="mostrarForm(true);"><font-awesome-icon icon="pen-square"/></button></th>
              <th><button class="btn btn-danger" onclick="delete_item()"><font-awesome-icon icon="minus-circle"/></button></th>
            </tr>
            <tr>
              <th><button class="btn btn-dark"><font-awesome-icon icon="file-download"/></button></th>
              <th>Auditoria informática</th>
              <th>Informática</th>
              <th>4 Horas</th>
              <th><button class="btn btn-primary" onclick="mostrarForm(true);"><font-awesome-icon icon="pen-square"/></button></th>
              <th><button class="btn btn-danger" onclick="delete_item()"><font-awesome-icon icon="minus-circle"/></button></th>
            </tr>
            <tr>
                <th><button class="btn btn-dark"><font-awesome-icon icon="file-download"/></button></th>
                <th>Administración de tecnologías</th>
                <th>Informática</th>
                <th>4 Horas</th>
                <th><button class="btn btn-primary" onclick="mostrarForm(true);"><font-awesome-icon icon="pen-square"/></button></th>
                <th><button class="btn btn-danger" onclick="delete_item()"><font-awesome-icon icon="minus-circle"/></button></th>
            </tr>
            <tr>
                <th><button class="btn btn-dark"><font-awesome-icon icon="file-download"/></button></th>
                <th>Diseño de sistemas</th>
                <th>Informática</th>
                <th>4 Horas y 30 minutos</th>
                <th><button class="btn btn-primary" onclick="mostrarForm(true);"><font-awesome-icon icon="pen-square"/></button></th>
                <th><button class="btn btn-danger" onclick="delete_item()"><font-awesome-icon icon="minus-circle"/></button></th>
            </tr>
            <tr>
                <th><button class="btn btn-dark"><font-awesome-icon icon="file-download"/></button></th>
                <th>Seguridad de software</th>
                <th>Informática</th>
                <th>4 Horas y 30 minutos</th>
                <th><button class="btn btn-primary" onclick="mostrarForm(true);"><font-awesome-icon icon="pen-square"/></button></th>
                <th><button class="btn btn-danger" onclick="delete_item()"><font-awesome-icon icon="minus-circle"/></button></th>
            </tr>
            <tr>
                <th><button class="btn btn-dark"><font-awesome-icon icon="file-download"/></button></th>
                <th>Titulación II</th>
                <th>Informática</th>
                <th>4 Horas</th>
                <th><button class="btn btn-primary" onclick="mostrarForm(true);"><font-awesome-icon icon="pen-square"/></button></th>
                <th><button class="btn btn-danger" onclick="delete_item()"><font-awesome-icon icon="minus-circle"/></button></th>
            </tr>
          </tbody>
          </table>
    </div>
</template>
<script>
export default {
    name: 'RegistrosMaterias',
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
        
    }
}
</script>