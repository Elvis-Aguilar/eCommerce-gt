const mongosee = require('mongoose');
const Schema = mongosee.Schema;
const model = mongosee.model;

const productoSchema = new Schema({
    nombre: String,
    precio:Number,
    img: String,
    descripcion: String,
    vendedor: Object,
    categorias:Array,
    cantidad_existente:Number
},
{
    versionKey: false
})

module.exports = model('productos', productoSchema)