import { Usuario } from './usuario';
export class Producto {
    _id!:String
    nombre!: String
    precio!:number
    img!: String
    descripcion!: String
    vendedor!: Usuario
    categorias!:String[]
    cantidad_existente!:number
}
