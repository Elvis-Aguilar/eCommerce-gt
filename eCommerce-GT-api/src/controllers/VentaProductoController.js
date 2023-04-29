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

const getProductoMasVendido = async (req, res)=> {
    const fechaI = new Date(req.query.fechaI);
    const fechaF = new Date(req.query.fechaF);
    const venta = await Venta.aggregate([{$match: {fecha: {$gte: fechaI,$lt: fechaF}}},
    {$group: {_id: {nombre_producto: "$nombre_producto",precio_producto: "$precio_producto",vendedor: "$vendedor"},cantidad_vendida: { $sum: "$cantidad_vendida" }}},
    {$project: {_id: 0,nombre_producto: "$_id.nombre_producto",precio_producto: "$_id.precio_producto",vendedor: "$_id.vendedor",cantidad_vendida: 1}},
    {$sort: {cantidad_vendida: -1}},{$limit: 10}])
    res.json(venta)
}

const getClienteMasVentas = async (req, res)=> {
    const fechaI = new Date(req.query.fechaI);
    const fechaF = new Date(req.query.fechaF);
    const venta = await Venta.aggregate([{$match: {fecha: {$gte: fechaI,$lt: fechaF}}},
    {$group: {_id: {vendedor: "$vendedor"},cantidad_vendida: { $sum: "$cantidad_vendida" }}},
    {$project: {_id: 0,vendedor: "$_id.vendedor",cantidad_vendida: 1}},
    {$sort: {cantidad_vendida: -1}},{$limit: 15}])
    res.json(venta)
}

module.exports = {
    saveVenta:saveVenta,
    getProductosSinFecha:getProductosSinFecha,
    getProductoMasVendido:getProductoMasVendido,
    getClienteMasVentas:getClienteMasVentas
}