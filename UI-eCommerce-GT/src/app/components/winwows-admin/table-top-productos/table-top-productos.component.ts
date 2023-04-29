import { VentaService } from './../../../services/venta.service';
import { SesionService } from 'src/app/services/sesion.service';
import { Venta } from './../../../../models/venta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-top-productos',
  templateUrl: './table-top-productos.component.html',
  styleUrls: ['./table-top-productos.component.css']
})
export class TableTopProductosComponent implements OnInit {

  ventas:Venta[]=[]
  constructor(private sesion:SesionService, private ventaSerice:VentaService) { }

  ngOnInit(): void {
    this.ventas = this.sesion.ventas
  }

}
