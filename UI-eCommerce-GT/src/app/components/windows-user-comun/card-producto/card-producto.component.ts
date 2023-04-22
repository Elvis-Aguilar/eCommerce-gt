import { ProductoService } from './../../../services/producto.service';
import { Producto } from './../../../../models/producto';
import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  imagen!: string;
  producto:Producto = new Producto()
  index=0
  constructor(private sesion:SesionService,
    private productoServise:ProductoService) { }

  ngOnInit(): void {
    this.producto = this.sesion.productos[this.sesion.iteradorProductos]
    this.index=this.sesion.iteradorProductos
    this.sesion.iteradorProductos++
    this.productoServise.getImgProducto(this.producto.img).subscribe(
      result => {
        this.createImageFromBlob(result);
      }
    )
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imagen = reader.result as string;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  addProducShoppingCart(){
    if (this.producto.cantidad_existente === 0) {
      Swal.fire(
        'Upss!!',
        'Intentas comprar un producto con 0 cantidades existente',
        'info'
      );
    } else {
      let indexof=this.sesion.productosShopping.findIndex((producto) => producto._id === this.producto._id)
      if (indexof!== -1) {
        this.sesion.productosShopping[indexof].cantidad_existente++
      }else{
        let produc ={ ...this.producto}
        produc.cantidad_existente=1
        this.sesion.productosShopping.push(produc)
      }
      this.producto.cantidad_existente--
      Swal.fire(
        'Competado!!',
        'Se agrego 1 '+this.producto.nombre+' al Shopping cart',
        'success'
      );
    }
    
  }
  
  

}
