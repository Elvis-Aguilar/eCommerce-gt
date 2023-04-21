const mongosee = require('mongoose');
const Schema = mongosee.Schema;
const model = mongosee.model;

const usuarioSchema = new Schema({
    nombre: String,
    apellido:String,
    DPI: Number,
    name_rol: String,
    tipo_rol: Number,
    password:String
},
{
    versionKey: false
})

module.exports = model('usuarios', usuarioSchema)