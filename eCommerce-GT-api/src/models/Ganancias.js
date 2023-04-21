const mongosee = require('mongoose');
const Schema = mongosee.Schema;
const model = mongosee.model;

const gananciaSchema = new Schema({
    fecha: Date,
    ganancia_empresa:Number,
    ganancia_vendedor: Number,
    vendedor: Object
},
{
    versionKey: false
})

module.exports = model('ganancias_venta', gananciaSchema)