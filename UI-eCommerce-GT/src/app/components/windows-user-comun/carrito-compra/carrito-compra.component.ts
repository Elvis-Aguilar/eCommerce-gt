import { TarjetaServiceService } from './../../../services/tarjeta-service.service';
import { Peticion } from './../../../../models/peticion';
import { PeticionService } from './../../../services/peticion.service';
import { GananciaService } from './../../../services/ganancia.service';
import { Ganancia } from './../../../../models/ganancia';
import { Observable } from 'rxjs';
import { Usuario } from './../../../../models/usuario';
import { Venta } from './../../../../models/venta';
import { VentaService } from './../../../services/venta.service';
import { Producto } from './../../../../models/producto';
import { SesionService } from 'src/app/services/sesion.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Tarjeta } from 'src/models/tarjeta';

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
  alias!:String
  newTarjet=false
  mostarTarjeta=false
  fechaCompra!:Date
  @ViewChild('fechaInput') fechaInput!: ElementRef;
  tarjetas:Tarjeta[]=[]
  guardarTarjeta=false

  constructor(private sesion:SesionService,
              private ventaService:VentaService,
              private gananciaService:GananciaService,
              private peticionService:PeticionService, private tarjetaService:TarjetaServiceService) { }

  ngOnInit(): void {
    this.sesion.mostrarHead= false
    this.productos = this.sesion.productosShopping
    this.calculosTotales()
    this.tarjetaService.getTarjetasUser(Number(this.sesion.usuario.DPI)).subscribe((value:Tarjeta[]) => {
      if (value.length > 0) {
        this.tarjetas=value
      }
    })
    
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

  comprarCarrito(){
    if (this.comprovarCarrito()) {
      const comprador = new Usuario()
      comprador.nombre = this.sesion.usuario.nombre
      comprador.DPI=this.sesion.usuario.DPI
      comprador.apellido = this.sesion.usuario.apellido
      if (this.guardarTarjeta &&  this.newTarjet) {
        const tarjeta=new Tarjeta()
        tarjeta.alias=this.alias+''
        tarjeta.codigo_seguridad=this.codigoSeguridad
        tarjeta.fecha_vencimiento=this.fechaVencimiento
        tarjeta.numero_tarjeta=this.numberTarjeta
        tarjeta.usuario=comprador
        this.tarjetaService.saveTarjeta(tarjeta).subscribe(
          (value:Tarjeta)=>{
            this.tarjetas.push(value)
          }
        )
      }
      this.saveProductoFor(comprador)
      
    } 
  }

  private saveProductoFor(comprador:Usuario){
    let totalGanancia=0
    this.productos.forEach(producto => {
      let venta = new Venta()
      venta.fecha=this.fechaCompra
      venta.nombre_producto = producto.nombre
      venta.cantidad_vendida=producto.cantidad_existente
      venta.precio_producto = producto.precio
      venta.comprador=comprador
      venta.vendedor = producto.vendedor
      this.ventaService.saveVenta(venta).subscribe((value:Venta) => {
        totalGanancia += value.precio_producto*value.cantidad_vendida
        this.saveGanancias(totalGanancia,producto,comprador);
      })
    })
    
  }

  private saveGanancias(totalGanancia:number,pro:Producto,comprador:Usuario){
    if (totalGanancia==this.total) {
      const ganancia = new Ganancia()
      ganancia.fecha=this.fechaCompra
      ganancia.ganancia_empresa=Number((totalGanancia*0.05).toFixed(2))
      ganancia.ganancia_vendedor=Number((totalGanancia*0.95).toFixed(2))
      ganancia.vendedor=pro.vendedor
      this.gananciaService.saveGanancia(ganancia).subscribe((value:Ganancia) => {
        this.savePeticion(comprador,this.limpiarProductos())
      })
    }
  }

  private savePeticion(comprado:Usuario, product:Producto[]){
    let peticion= new Peticion()
    peticion.comprador=comprado
    peticion.estado = 'En Curso'
    peticion.fecha_venta = this.fechaCompra
    peticion.fecha_entrega=this.fechaInput.nativeElement.valueAsDate
    peticion.fecha_entrega.setDate(peticion.fecha_venta.getDate()+5)
    peticion.productos=product
    this.peticionService.savePeticion(peticion).subscribe((value:Peticion) =>{
      this.resetAllCarrito()
      this.msjCompra(value)
    })
  }

  msjCompra(vauel:Peticion){
    if (vauel !== undefined && vauel !== null) {
      Swal.fire(
        'Compra Completada',
        'En 5 dias apoximadamente te llegaran los productos comprados',
        'success'
      );
    } else {
      Swal.fire(
        'Error',
        'Se presento algun error en la compra, verifique su compra',
        'error'
      );
    }
  }

  private limpiarProductos(){
    const product:Producto[]= []
    this.productos.forEach(element => {
      const temp=new Producto()
      temp.nombre=element.nombre
      temp.precio=element.precio
      temp.cantidad_existente=element.cantidad_existente
      product.push(temp)
    });
    return product
  }

  setGuardar(num:number){
    if (num === 1) {
      this.guardarTarjeta =true
    }else{
      this.guardarTarjeta=false
    }
  }

  setValoresTarjeta(index:number){
    const tarjet=this.tarjetas[index]
    this.alias=tarjet.alias
    this.codigoSeguridad=tarjet.codigo_seguridad
    this.fechaVencimiento=tarjet.fecha_vencimiento
    this.numberTarjeta=tarjet.numero_tarjeta
    this.mostarTarjeta=true
  }

  private comprovarCarrito():boolean{
    try {
      this.fechaCompra = this.fechaInput.nativeElement.valueAsDate;
    } catch (error) {
      Swal.fire(
        'Sin fecha!',
        'Debes de seleccionar la fecha de compra',
        'info'
      );
      return false
    }
    if (this.productos.length == 0) {
      Swal.fire(
        'Sin productos en el Carrito',
        'Debes de comprar productos en el Carrito ',
        'info'
      );
      return false
    }
    if (this.fechaCompra === undefined || this.fechaCompra == null) {
      Swal.fire(
        'Sin fecha!',
        'Debes de seleccionar la fecha de compra',
        'info'
      );
      return false
    }
    
    if (!this.comprobarTarjeta()) {
      Swal.fire(
        'Error',
        'Debes llenar los campos de la tarjeta o eleigir una tarjeta registrada',
        'error'
      );
      return false
    }

    return true

  }

  comprobarTarjeta():boolean{
    if (this.numberTarjeta === undefined || this.numberTarjeta == null) {
      return false
    }
    if (this.fechaVencimiento === undefined || this.fechaVencimiento == null){
      return false
    }
    if (this.codigoSeguridad === undefined || this.codigoSeguridad == null) {
      return false
    }
    if (this.guardarTarjeta &&  this.newTarjet) {
      if (this.alias === undefined && this.alias === "") {
        return false
      }
    }
    return true
  }



}
