import { PeticionService } from './../../../services/peticion.service';
import { SesionService } from 'src/app/services/sesion.service';
import { Component, OnInit } from '@angular/core';
import { Peticion } from 'src/models/peticion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-pedidos',
  templateUrl: './gestion-pedidos.component.html',
  styleUrls: ['./gestion-pedidos.component.css']
})
export class GestionPedidosComponent implements OnInit {

  texto=''
  pedidosEnCuros:Peticion[]=[]
  constructor(private sesion:SesionService, private peticionService:PeticionService) { }

  ngOnInit(): void {
    this.getPedidosEnCuros();
  }


  mostrarDatosProdcuto(index:number){
    this.textoInfoProductos(index)
    const comprador='DPI: '+this.pedidosEnCuros[index].comprador.DPI+'<br> Nombre: '+this.pedidosEnCuros[index].comprador.nombre
    Swal.fire({
      title: 'Comprador: <br><strong><u>'+comprador+'</u></strong> <br> Productos',
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

  textoInfoProductos(index:number){
    this.texto = ''
    const peticion:Peticion = this.pedidosEnCuros[index]
    peticion.productos.forEach(element => {
      this.texto += '**Producto: <b>'+element.nombre+'</b>, Pecio U: <b>'+element.precio+'</b>, Cantidad Comprada: <b>'+element.cantidad_existente+'</b><br>' 
    });
  }

  getPedidosEnCuros(){
    this.peticionService.getPeticionesEnCurosAll().subscribe(
      (value: Peticion[]) =>{
        if (value.length !== 0) {
          this.pedidosEnCuros = value
          this.limpiarFechasEnCurso()
        }
      }
    )
  }

  limpiarFechasEnCurso(){
    this.pedidosEnCuros.forEach(peticion => {
      const fechaString = peticion.fecha_entrega;
      peticion.fecha_entrega = new Date(fechaString);
      const fechaString2 = peticion.fecha_venta;
      peticion.fecha_venta = new Date(fechaString2);
    });
  }

  setEstadoEntregado(index:number){
    this.peticionService.setEstado(this.pedidosEnCuros[index]).subscribe((value: Peticion) =>{
      Swal.fire(
        'Completado',
        'Pedido Entregado con exito',
        'success'
      );
      this.getPedidosEnCuros()
    })
  }
}
