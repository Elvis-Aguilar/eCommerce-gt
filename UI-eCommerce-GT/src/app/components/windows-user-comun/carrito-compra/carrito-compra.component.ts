import { Producto } from './../../../../models/producto';
import { SesionService } from 'src/app/services/sesion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {
  productos:Producto[]=[]
  total=0
  cantidad=0
  numberTarjeta!:number
  fechaVencimiento!:Date
  codigoSeguridad!:number
  newTarjet=false

  constructor(private sesion:SesionService) { }
  ngOnInit(): void {
    this.sesion.mostrarHead= false
    this.productos = this.sesion.productosShopping
    this.calculosTotales()
    
  }

  resetAllCarrito(){
    this.productos=[]
    this.sesion.productosShopping=[]
    this.total=0
    this.cantidad=0
  }

  quitProducto(index:number){
    this.sesion.productosShopping.splice(index,1)
    this.productos = this.sesion.productosShopping
    this.calculosTotales()
  }

  private calculosTotales(){
    this.total=0
    this.cantidad = 0
    this.productos.forEach(element => {
      this.cantidad += element.cantidad_existente
      this.total+=element.cantidad_existente*element.precio
    });
  }

  newTarjetClick(){
    this.newTarjet = true
  }

}
