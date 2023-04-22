import { Producto } from './producto';
import { Usuario } from './usuario';
export class Peticion {
    estado!: String
    fecha_venta!:Date
    fecha_entrega!: Date
    productos!: Producto[]
    comprador!: Usuario
}
