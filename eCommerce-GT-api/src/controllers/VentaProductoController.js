const Venta = require('../models/VentaProducto')

/**
 * guarda un nuevo Venta
 * @param {*} req 
 * @param {*} res 
 */
const saveVenta = async (req, res)=> {
    const insertVenta = new Venta({
        fecha: req.body.fecha,
        nombre_producto: req.body.nombre_producto,
        precio_producto: req.body.precio_producto,
        cantidad_vendida: req.body.cantidad_vendida,
        vendedor: req.body.vendedor,
        comprador: req.body.comprador
    });
    const newVenta = await insertVenta.save();
    res.json(newUser)
}

module.exports = {
    saveVenta:saveVenta
}