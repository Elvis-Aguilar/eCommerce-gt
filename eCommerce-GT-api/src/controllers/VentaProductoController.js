const Venta = require('../models/VentaProducto')
const controllerProducto = require('./ProductoController')

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
        comprador: req.body.comprador,
        
    });
    const newVenta = await insertVenta.save();
    controllerProducto.descontarProducto(newVenta.vendedor,newVenta.cantidad_vendida,newVenta.nombre_producto)
    res.json(newVenta)
}

const getProductosSinFecha = async (req, res)=> {
    const venta = await Venta.find({"vendedor.DPI":Number(req.query.DPI)})
    res.json(venta)
}

module.exports = {
    saveVenta:saveVenta,
    getProductosSinFecha:getProductosSinFecha
}