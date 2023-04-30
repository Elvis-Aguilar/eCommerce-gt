import { Categoria } from './../../../../models/categoria';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { SesionService } from 'src/app/services/sesion.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/models/producto';

@Component({
  selector: 'app-window-home',
  templateUrl: './window-home.component.html',
  styleUrls: ['./window-home.component.css']
})
export class WindowHomeComponent implements OnInit {

  categorias:Categoria[]=[]
  productos:Producto[] = []

  constructor(private categoriaService:CategoriesService,
    private sesion:SesionService, private productoService:ProductoService) { }

  ngOnInit(): void {
    this.sesion.mostrarHead = true
    this.categoriaService.getCategories().subscribe(
      (value: Categoria[]) =>{
        this.categorias=value
        this.sesion.categorias = this.categorias
        this.sesion.iteradorCategoria = 0
      },
      (error:any) =>{}
    );
    this.productoService.getProductosLimit11().subscribe(
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
