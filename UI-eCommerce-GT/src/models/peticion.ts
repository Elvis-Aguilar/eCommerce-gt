import { Producto } from './producto';
import { Usuario } from './usuario';
export class Peticion {
    _id!:String
    estado!: String
    fecha_venta!:Date
    fecha_entrega!: Date
    productos!: Producto[]
    comprador!: Usuario
}
