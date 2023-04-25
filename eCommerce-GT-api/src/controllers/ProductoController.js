const Producto = require('../models/Producto')

/**
 * funcion obtiene las categorias
 * @param {*} req 
 * @param {*} res 
 */
const getProductos = async (req, res) => {
    const categoria = req.query.categoria
    const productos = await Producto.find({categorias :categoria, cantidad_existente:{$gt: 0}})
    res.json(productos)
}

const descontarProducto = async (vendedor,cantidadVendida,nombreP)=> {
    const productoTemp = await Producto.findOne({nombre:nombreP,"vendedor.DPI": vendedor.DPI})
    const cantidadAcutalizada = productoTemp.cantidad_existente-cantidadVendida
    const productoUpdate = await Producto.updateMany({nombre:nombreP,"vendedor.DPI": vendedor.DPI},{$set: {cantidad_existente:cantidadAcutalizada}})
}



const getImgProducto = async (req, res) => {
    res.set('Content-Type', 'image/jpg');
    const url = req.query.url
    res.sendFile(__dirname+url);
}



module.exports = {
    getProductos:getProductos,
    getImgProducto:getImgProducto,
    descontarProducto:descontarProducto 
}