const Usuario = require('../models/Usuario')

/**
 * funcion obtiene al usuario correspondiente a password y dpi
 * @param {*} req 
 * @param {*} res 
 */
const getUsuario = async (req, res) => {
    const DPI = req.query.DPI
    const password = req.query.password
    const users = await Usuario.findOne({DPI :DPI, password:password})
    res.json(users)
}

/**
 * guarda un nuevo usuario
 * @param {*} req 
 * @param {*} res 
 */
const saveUsuario = async (req, res)=> {
    const insertUser = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        DPI: req.body.DPI,
        name_rol: req.body.name_rol,
        tipo_rol: req.body.tipo_rol,
        password: req.body.password
    });
    const newUser = await insertUser.save();
    res.json(newUser)
}

module.exports = {
    getUsuario:getUsuario,
    saveUsuario:saveUsuario
}