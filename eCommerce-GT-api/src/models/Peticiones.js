const mongosee = require('mongoose');
const Schema = mongosee.Schema;
const model = mongosee.model;

const peticionSchema = new Schema({
    estado: String,
    fecha_venta:Date,
    fecha_entrega: Date,
    productos: Array,
    comprador: Object
},
{
    versionKey: false
})

module.exports = model('peticiones', peticionSchema)