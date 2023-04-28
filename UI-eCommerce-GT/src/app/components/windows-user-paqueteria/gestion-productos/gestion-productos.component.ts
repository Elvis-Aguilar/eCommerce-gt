import { ProductoService } from './../../../services/producto.service';
import { Producto } from './../../../../models/producto';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  productos:Producto[]=[]

  constructor(private productosSevices:ProductoService) { }
  
  ngOnInit(): void {
    this.getProductosPendientes()
  }


  getProductosPendientes(){
    this.productosSevices.getProductosPendientes().subscribe((value: Producto[]) =>{
      if (value.length !== 0) {
        this.productos = value
      }
    })

  }

  setEstado(index:number,aceptado:boolean){
    if (aceptado) {
      this.productos[index].estado='Aceptado'
    } else {
      this.productos[index].estado='Rechazado'
    }
    this.productosSevices.setEstado(this.productos[index]).subscribe((value: Producto) =>{
      Swal.fire(
        'Completado',
        'Producto Aceptado/Rechazado con exito',
        'success'
      );
      this.getProductosPendientes()
    })
  }

}
