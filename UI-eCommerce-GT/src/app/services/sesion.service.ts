import { Producto } from './../../models/producto';
import { Injectable } from '@angular/core';
import { Categoria } from 'src/models/categoria';
import { Usuario } from 'src/models/usuario';
import { Peticion } from 'src/models/peticion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  usuario!: Usuario;
  iteradorCategoria = 0
  categorias:Categoria[]=[]
  categoriActual:Categoria = new Categoria()
  productos:Producto[] =[]
  iteradorProductos = 0
  mostrarHead= true
  productosShopping:Producto[] =[]
  pedidosEnCuros:Peticion[]=[]
  pedidosEntregados:Peticion[]=[]



  constructor() { }
}
