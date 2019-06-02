<template>
    <div>
        <form class="p-3">
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label>Clave:</label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-group col-md-6">
                    <label>Materia <strong class="text-info">(*)</strong>:</label>
                    <input type="text" class="form-control" placeholder="Ingrese el nombre de la materia" required>
                </div>
                <div class="form-group col-md-3">
                    <label>Horas semanales:</label>
                    <input type="number" class="form-control" min="0">
                </div>
            </div>
            <hr style="border:solid .5px black;">
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label>Clave:</label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-group col-md-6">
                    <label>Materia <strong class="text-info">(*)</strong>:</label>
                    <input type="text" class="form-control" placeholder="Ingrese el nombre de la materia" required>
                </div>
                <div class="form-group col-md-3">
                    <label>Horas semanales:</label>
                    <input type="number" class="form-control" min="0">
                </div>
            </div>
            <div class="text-right">
                <button type="button" class="btn btn btn-dark">Guardar cambios</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'MateriaForm',
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
