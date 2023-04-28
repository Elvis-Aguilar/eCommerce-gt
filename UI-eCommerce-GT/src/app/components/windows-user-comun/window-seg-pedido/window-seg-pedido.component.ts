import { PeticionService } from './../../../services/peticion.service';
import { Peticion } from './../../../../models/peticion';
import { Producto } from './../../../../models/producto';
import { SesionService } from 'src/app/services/sesion.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-window-seg-pedido',
  templateUrl: './window-seg-pedido.component.html',
  styleUrls: ['./window-seg-pedido.component.css']
})
export class WindowSegPedidoComponent implements OnInit {

  texto=''
  pedidosEnCuros:Peticion[]=[]
  pedidosEntregados:Peticion[]=[]

  constructor(private sesion:SesionService, private peticionService:PeticionService)  { }

   ngOnInit(): void {
    this.sesion.mostrarHead = false
     this.getPedidosEnCuros()
     this.getPedidosEntregados()
  }

  mostrarDatosProdcuto(index:number, isCuros:boolean){
    this.textoInfoProductos(index,isCuros)
    Swal.fire({
      title: '<strong><u>'+'Detalles de Productos'+'</u></strong>',
      icon: 'info',
      html:
        this.texto,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> thanks!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    })
  }

  textoInfoProductos(index:number, isCuros:boolean){
    this.texto = ''
    if (isCuros) {
      const peticion:Peticion = this.pedidosEnCuros[index]
      peticion.productos.forEach(element => {
        this.texto += '**Producto: <b>'+element.nombre+'</b>, Pecio U: <b>'+element.precio+'</b>, Cantidad Comprada: <b>'+element.cantidad_existente+'</b><br>' 
      });
    }else{
      const peticion:Peticion = this.pedidosEntregados[index]
      peticion.productos.forEach(element => {
        this.texto += '**Producto: <b>'+element.nombre+'</b>, Pecio U: <b>'+element.precio+'</b>, Cantidad Comprada: <b>'+element.cantidad_existente+'</b><br>' 
      });
    }
  }

  getPedidosEnCuros(){
    this.peticionService.getPeticionesEnCuros(Number(this.sesion.usuario.DPI)).subscribe(
      (value: Peticion[]) =>{
        if (value.length !== 0) {
          this.pedidosEnCuros = value
          this.limpiarFechasEnCurso()
        }
      }
    )
  }

  getPedidosEntregados(){
    this.peticionService.getPeticionesEntregados(Number(this.sesion.usuario.DPI)).subscribe(
      (value: Peticion[]) =>{
        if (value.length !== 0) {
          this.pedidosEntregados = value
          this.limpiarFechasEntregados()
        }
      }
    )
  }

  limpiarFechasEntregados(){
    this.pedidosEntregados.forEach(peticion => {
      const fechaString = peticion.fecha_entrega;
      peticion.fecha_entrega = new Date(fechaString);
      const fechaString2 = peticion.fecha_venta;
      peticion.fecha_venta = new Date(fechaString2);
    });
  }
  limpiarFechasEnCurso(){
    this.pedidosEnCuros.forEach(peticion => {
      const fechaString = peticion.fecha_entrega;
      peticion.fecha_entrega = new Date(fechaString);
      const fechaString2 = peticion.fecha_venta;
      peticion.fecha_venta = new Date(fechaString2);
    });
  }

}
