import { Usuario } from './usuario';
export class Venta {
    fecha!: Date
    nombre_producto!:String
    precio_producto!: number
    cantidad_vendida!:number
    vendedor!: Usuario
    comprador!: Usuario
}
