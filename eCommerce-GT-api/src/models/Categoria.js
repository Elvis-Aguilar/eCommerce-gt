const mongosee = require('mongoose');
const Schema = mongosee.Schema;
const model = mongosee.model;

const categoriaSchema = new Schema({
    nombre: String,
    descripcion:String,
    img: String
},
{
    versionKey: false
})

module.exports = model('categorias', categoriaSchema)