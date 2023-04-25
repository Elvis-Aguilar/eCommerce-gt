const mongosee = require('mongoose');
const Schema = mongosee.Schema;
const model = mongosee.model;

const ventaSchema = new Schema({
    fecha: Date,
    nombre_producto:String,
    precio_producto: Number,
    cantidad_vendida:Number,
    vendedor: Object,
    comprador: Object
},
{
    versionKey: false
})

module.exports = model('venta_productos', ventaSchema)