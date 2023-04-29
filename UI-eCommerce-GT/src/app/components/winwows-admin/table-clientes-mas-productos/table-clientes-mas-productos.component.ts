import { Producto } from './../../../../models/producto';
import { SesionService } from 'src/app/services/sesion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-clientes-mas-productos',
  templateUrl: './table-clientes-mas-productos.component.html',
  styleUrls: ['./table-clientes-mas-productos.component.css']
})
export class TableClientesMasProductosComponent implements OnInit {

  productos:Producto[]=[]
  constructor(private sesion:SesionService) { }

  ngOnInit(): void {
    this.productos = this.sesion.productosReport
  }

}
