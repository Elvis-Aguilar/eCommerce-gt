import { Peticion } from './../../../../models/peticion';
import { SesionService } from 'src/app/services/sesion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-clientes-mas-pedidos',
  templateUrl: './table-clientes-mas-pedidos.component.html',
  styleUrls: ['./table-clientes-mas-pedidos.component.css']
})
export class TableClientesMasPedidosComponent implements OnInit {

  peticiones:Peticion[]=[]
  constructor(private sesion:SesionService) { }

  ngOnInit(): void {
   this.peticiones= this.sesion.peticones
  }

}
