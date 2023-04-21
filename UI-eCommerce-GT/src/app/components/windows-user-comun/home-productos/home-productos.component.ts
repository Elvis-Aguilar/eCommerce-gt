import { ProductoService } from './../../../services/producto.service';
import { Producto } from './../../../../models/producto';
import { SesionService } from './../../../services/sesion.service';
import { CategoriesService } from './../../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/models/categoria';

@Component({
  selector: 'app-home-productos',
  templateUrl: './home-productos.component.html',
  styleUrls: ['./home-productos.component.css']
})
export class HomeProductosComponent implements OnInit {
  
  productos:Producto[] = []
  constructor(private productoService:ProductoService,
    private sesion:SesionService) { }

  ngOnInit(): void {
    this.sesion.mostrarHead=true
    this.productoService.getProductosCateg(this.sesion.categoriActual).subscribe(
      (value: Producto[]) =>{
        this.verificarProdcutos(value)
        this.sesion.iteradorProductos = 0
      },
      (error:any) =>{}
    );
  }

  public verificarProdcutos(productsConsulta:Producto[]){
    this.sesion.productos = []
    let iterIndex = 0
    if (this.sesion.productosShopping.length !== 0) {
      for (let index = 0; index < productsConsulta.length; index++) {
        let encontrado = false
        const producto = productsConsulta[index];
        if (iterIndex !== this.sesion.productosShopping.length) {
          for (let index = iterIndex; index < this.sesion.productosShopping.length; index++) {
            const element = this.sesion.productosShopping[index];
            if (producto._id === element._id) {
              if (element.cantidad_existente===producto.cantidad_existente) {
                encontrado = true
                iterIndex++
                break;
              }else{
                producto.cantidad_existente=producto.cantidad_existente-element.cantidad_existente
              }
              
            }
          }
        }
        if (!encontrado) {
          this.sesion.productos.push(producto)
        }
      }
    }else{
      this.sesion.productos = productsConsulta
    }
    this.productos=this.sesion.productos
  }

}
