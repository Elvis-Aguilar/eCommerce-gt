const mongosee = require('mongoose');
const Schema = mongosee.Schema;
const model = mongosee.model;

const tarjeta = new Schema({
    fecha_vencimiento:Date,
    codigo_seguridad:Number,
    numero_tarjeta:Number,
    usuario: Object,
    alias:String
},
{
    versionKey: false
})

module.exports = model('tarjetas', tarjeta)