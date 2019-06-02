<template>
    <div>
        <table class="col-12 table table-striped table-responsive" id="detalles">
          <thead>
            <tr>
              <th scope="col">Reporte</th>
              <th scope="col">CURP</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><button class="btn btn-dark"><font-awesome-icon icon="file-download"/></button></th>
              <th>HECC970929HMCRNR09</th>
              <th>Carlos Hernández</th>
              <th>CarlosHdz_97@outlook.com</th>
              <th><button class="btn btn-primary" onclick="mostrarForm(true);"><font-awesome-icon icon="pen-square"/></button></th>
              <th><button class="btn btn-danger" onclick="delete_item()"><font-awesome-icon icon="minus-circle"/></button></th>
            </tr>
            <tr>
              <th><button class="btn btn-dark"><font-awesome-icon icon="file-download"/></button></th>
              <th>MEMG970508MMCRNR09</th>
              <th>Gabriela Mendoza</th>
              <th>gabriela@gmail.com</th>
              <th><button class="btn btn-primary" onclick="mostrarForm(true);"><font-awesome-icon icon="pen-square"/></button></th>
              <th><button class="btn btn-danger" onclick="delete_item()"><font-awesome-icon icon="minus-circle"/></button></th>
            </tr>
            <tr>
              <th><button class="btn btn-dark"><font-awesome-icon icon="file-download"/></button></th>
              <th>DUMV970105MMCRNR09</th>
              <th>Viridiana Duran</th>
              <th>Viridiana@gmail.com</th>
              <th><button class="btn btn-primary" onclick="mostrarForm(true);"><font-awesome-icon icon="pen-square"/></button></th>
              <th><button class="btn btn-danger" onclick="delete_item()"><font-awesome-icon icon="minus-circle"/></button></th>
            </tr>
          </tbody>
          </table>
    </div>
</template>
