const Peticion = require('../models/Peticiones')

/**
 * guarda un nuevo Peticion
 * @param {*} req 
 * @param {*} res 
 */
const savePeticion = async (req, res)=> {
    const insertPeticion = new Peticion({
        estado: req.body.estado,
        fecha_venta: req.body.fecha_venta,
        fecha_entrega: req.body.fecha_entrega,
        productos: req.body.productos,
        comprador: req.body.comprador
    });
    const newPeticion = await insertPeticion.save();
    res.json(newPeticion)

}

module.exports = {
    savePeticion:savePeticion
}