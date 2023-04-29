import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';
import { VentaService } from 'src/app/services/venta.service';
import { Venta } from 'src/models/venta';

@Component({
  selector: 'app-table-clientes-mas-product-vende',
  templateUrl: './table-clientes-mas-product-vende.component.html',
  styleUrls: ['./table-clientes-mas-product-vende.component.css']
})
export class TableClientesMasProductVendeComponent implements OnInit {
  
  ventas:Venta[]=[]
  constructor(private sesion:SesionService, private ventaSerice:VentaService) { }

  ngOnInit(): void {
    this.ventas = this.sesion.ventasCliente
  }

}
