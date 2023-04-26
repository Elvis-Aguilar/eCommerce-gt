const Producto = require('../models/Producto')
const multer = require('multer');
const path = require('path');

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

const getProductosUser = async (req, res) => {
    const productosUser = await Producto.find({"vendedor.DPI":Number(req.query.DPI)})
    res.json(productosUser)
}

const descontarProducto = async (vendedor,cantidadVendida,nombreP)=> {
    const productoTemp = await Producto.findOne({nombre:nombreP,"vendedor.DPI": vendedor.DPI})
    const cantidadAcutalizada = productoTemp.cantidad_existente-cantidadVendida
    const productoUpdate = await Producto.updateMany({nombre:nombreP,"vendedor.DPI": vendedor.DPI},{$set: {cantidad_existente:cantidadAcutalizada}})
}

const saveProducto =async (req, res) => {
    const productoInsert = new Producto({
        nombre:  req.body.nombre,
        precio: req.body.precio,
        img: req.body.img,
        descripcion: req.body.descripcion,
        vendedor: req.body.vendedor,
        categorias:req.body.categorias,
        cantidad_existente:req.body.cantidad_existente
    })
    const newProducto = await productoInsert.save();
    res.json(newProducto)
}


const getImgProducto = async (req, res) => {
    res.set('Content-Type', 'image/jpg');
    const url = req.query.url
    res.sendFile(__dirname+url);
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'src/controllers/img/img_productos');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
});
  
  const upload = multer({ storage: storage })





module.exports = {
    getProductos:getProductos,
    getImgProducto:getImgProducto,
    descontarProducto:descontarProducto,
    getProductosUser:getProductosUser,
    upload:upload,
    saveProducto:saveProducto
}