import { Usuario } from 'src/models/usuario';
import { Venta } from './../../../../models/venta';
import { VentaService } from './../../../services/venta.service';
import { ProductoService } from './../../../services/producto.service';
import { Producto } from './../../../../models/producto';
import { Categoria } from 'src/models/categoria';
import { CategoriesService } from 'src/app/services/categories.service';
import { SesionService } from 'src/app/services/sesion.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  mostrarFormulario=false
  mostrarReporte = false
  categorias:Categoria[]=[]
  categoriasSelect:String[]=[]
  productos:Producto[]=[]
  productosRechazados:Producto[]=[]
  productosPendientes:Producto[]=[]

  ventas:Venta[]=[]
  
  nombreProducto = ''
  precioProducto = 0
  cantidadExisitente=0
  descripcion = ''
  file!:File
  formData!: FormData


  constructor(private sesion:SesionService, private categoriaService:CategoriesService,
              private productoService:ProductoService, private ventaService:VentaService) { }

  ngOnInit(): void {
    this.sesion.mostrarHead=false
    this.getCategorias()
    this.getProductos()
    this.getProductosPendientes()
    this.getProductosRechzados()
    this.getVentas()
  }

  mostrarForm(){
    this.mostrarReporte = false
    this.mostrarFormulario=!this.mostrarFormulario
  }

  mostrarRpor(){
    this.mostrarFormulario=false
    this.mostrarReporte = !this.mostrarReporte
  }

  getCategorias(){
    this.categoriaService.getCategories().subscribe(
      (value: Categoria[]) =>{
        this.categorias=value
      },
      (erro:any) =>{}
    )
  }

  getProductos(){
    this.productoService.getProductosUser(this.sesion.usuario.DPI).subscribe(
      (value: Producto[]) =>{
      this.productos = value
    })
  }

  getProductosRechzados(){
    this.productoService.getProductosUserRechazados(this.sesion.usuario.DPI).subscribe(
      (value: Producto[]) =>{
      this.productosRechazados = value
    })
  }

  getProductosPendientes(){
    this.productoService.getProductosUserPendientes(this.sesion.usuario.DPI).subscribe(
      (value: Producto[]) =>{
      this.productosPendientes = value
    })
  }

  getVentas(){
    this.ventaService.getPreoductosUser(this.sesion.usuario.DPI).subscribe((value: Venta[]) =>{
      this.ventas=value
      this.ventas[0].fecha = new Date(this.ventas[0].fecha)
      this.limpiarFechasVentas()
    })
  }

  limpiarFechasVentas(){
    this.ventas.forEach(venta => {
      const fechaString = venta.fecha;
      venta.fecha = new Date(fechaString);
    });
  }

  capturarCategoria(nombreCategoria:String){
    const indice = this.categoriasSelect.indexOf(nombreCategoria)
    if (indice !== -1) {
      this.categoriasSelect.splice(indice, 1);
    } else {
      this.categoriasSelect.push(nombreCategoria)
    }
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement != null && inputElement.files != null && inputElement.files.length > 0) {
      this.file = inputElement.files[0];
      this.formData  = new FormData();
      this.formData.append('imagen', this.file, this.file.name);
      // Aquí puedes enviar el formulario al servidor utilizando una solicitud HTTP
    }
  }
  
  registrarProducto(){
    if (this.validrForm()) {
      this.productoService.saveImgProducto(this.formData).subscribe(
        (value: String) =>{
          if (value !== undefined && value !== null) {
            this.saveProducto(value)
          }else{
            Swal.fire(
              'Ups!!',
              'Ocurrio un error en el servidor: comuniquese con soporte :V',
              'error'
            );
          }
        }
      )
    }else{
      Swal.fire(
        'Ups!!',
        'Campos sin completar: debe llenar todos los campos primero',
        'error'
      );
    }
  }

  saveProducto(img:String){
    const userTemp:Usuario = new Usuario()
    userTemp.DPI = this.sesion.usuario.DPI
    userTemp.nombre = this.sesion.usuario.nombre
    userTemp.apellido = this.sesion.usuario.apellido
    const producto:Producto= new Producto()
    producto.cantidad_existente=this.cantidadExisitente
    producto.categorias = this.categoriasSelect
    producto.descripcion= this.descripcion
    producto.nombre = this.nombreProducto
    producto.img = img
    producto.precio = this.precioProducto
    producto.vendedor = userTemp
    this.productoService.saveProducto(producto).subscribe(
      (value: Producto) =>{
        if (value.nombre != undefined) {
          this.productos.push(value)
          this.limpiarForm()
        }else{
          Swal.fire(
            'Ups!!',
            'Ocurrio un error en el servidor: comuniquese con soporte :V',
            'error'
          );
        }
      }
    )

  }

  limpiarForm(){
    this.cantidadExisitente=0
    this.nombreProducto=''
    this.categoriasSelect = []
    this.precioProducto = 0
    this.descripcion = ''
    Swal.fire(
      'Proceso completado!!',
      'Producto enviado a los encargados de paqueteria para Verificacion si el paquete es aceptado se publicara',
      'success'
    );
    
  }


  clickAumentar(index:number){
    this.productos[index].cantidad_existente++
    this.productoService.aumetarCantidad(this.productos[index]).subscribe(
      (value: Producto) =>{
        console.log(value)
        if (value._id != undefined) {
        this.productos[index] = value
        }else{
          Swal.fire(
            'Ups!!',
            'Ocurrio un error en el servidor: comuniquese con soporte :V',
            'error'
          );
        }
      }
    )
  }


  validrForm():boolean{
    if (this.precioProducto  <= 0 || this.nombreProducto ==='' || this.cantidadExisitente  <=0 || this.descripcion ==='') {
      return false
    }
    if (this.file === undefined || this.file === null) {
      return false
    }
    if (this.categoriasSelect.length ===0) {
      return false
    }
    return true
  }
}


