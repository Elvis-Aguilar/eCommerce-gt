import { Usuario } from "./usuario"

export class Tarjeta {
    fecha_vencimiento!:Date
    codigo_seguridad!:number
    numero_tarjeta!:number
    usuario!: Usuario
    alias!:string
}
