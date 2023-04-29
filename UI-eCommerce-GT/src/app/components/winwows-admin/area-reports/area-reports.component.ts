import { Ganancia } from './../../../../models/ganancia';
import { GananciaService } from './../../../services/ganancia.service';
import { VentaService } from './../../../services/venta.service';
import { SesionService } from './../../../services/sesion.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Venta } from 'src/models/venta';

@Component({
  selector: 'app-area-reports',
  templateUrl: './area-reports.component.html',
  styleUrls: ['./area-reports.component.css']
})
export class AreaReportsComponent implements OnInit {
  
  fechaIncial=''
  fechaFinal=''
  tipoReporte=0
  constructor(private sesion:SesionService, private ventaSerice:VentaService,
    private ganaciaService:GananciaService) { }

  ngOnInit(): void {
  }

  clickReportRopProductos(){
    this.tipoReporte=0
    if (this.fechaFinal !== '' && this.fechaIncial !=='') {
      this.ventaSerice.getReporProductosMasVendidos(this.fechaIncial, this.fechaFinal).subscribe(
        (value: Venta[]) =>{
          if (value.length !== 0) {
            this.sesion.ventas = value
            this.tipoReporte=1
          }else{
            this.tipoReporte =-1
          }
        });
    } else {
      Swal.fire(
        'Upss!!',
        'Debes seleccionar el rango de fecha',
        'info'
      )
    }
  }

  clickClienteMasGanancias(){
    this.tipoReporte=0
    if (this.fechaFinal !== '' && this.fechaIncial !=='') {
      this.ganaciaService.getClientesMasGanancias(this.fechaIncial, this.fechaFinal).subscribe(
        (value: Ganancia[]) =>{
          if (value.length !== 0) {
            this.sesion.ganancias = value
            this.tipoReporte=2
          }else{
            this.tipoReporte =-1
          }
        });
    } else {
      Swal.fire(
        'Upss!!',
        'Debes seleccionar el rango de fecha',
        'info'
      )
    }
  }

}
