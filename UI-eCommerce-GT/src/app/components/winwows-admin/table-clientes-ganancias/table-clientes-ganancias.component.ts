import { SesionService } from 'src/app/services/sesion.service';
import { Component, OnInit } from '@angular/core';
import { Ganancia } from 'src/models/ganancia';

@Component({
  selector: 'app-table-clientes-ganancias',
  templateUrl: './table-clientes-ganancias.component.html',
  styleUrls: ['./table-clientes-ganancias.component.css']
})
export class TableClientesGananciasComponent implements OnInit {

  ganancias:Ganancia[]=[]
  constructor(private sesion:SesionService) { }

  ngOnInit(): void {
    this.ganancias= this.sesion.ganancias
  }

}
