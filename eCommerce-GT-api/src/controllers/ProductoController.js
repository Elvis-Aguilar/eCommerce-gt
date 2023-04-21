const Producto = require('../models/Producto')

/**
 * funcion obtiene las categorias
 * @param {*} req 
 * @param {*} res 
 */
const getProductos = async (req, res) => {
    const categoria = req.query.categoria
    const productos = await Producto.find({categorias :categoria})
    res.json(productos)
}

const getImgProducto = async (req, res) => {
    res.set('Content-Type', 'image/jpg');
    const url = req.query.url
    res.sendFile(__dirname+url);
}



module.exports = {
    getProductos:getProductos,
    getImgProducto:getImgProducto
}