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
    const productos = await Producto.find({estado:'Aceptado',categorias :categoria, cantidad_existente:{$gt: 0}})
    res.json(productos)
}

const getProductosUser = async (req, res) => {
    const productosUser = await Producto.find({estado:'Aceptado',"vendedor.DPI":Number(req.query.DPI)})
    res.json(productosUser)
}

const getProductosUserPendinte = async (req, res) => {
    const productosUser = await Producto.find({estado:'Pendiente',"vendedor.DPI":Number(req.query.DPI)})
    res.json(productosUser)
}

const getProductosUserRechazado = async (req, res) => {
    const productosUser = await Producto.find({estado:'Rechazado',"vendedor.DPI":Number(req.query.DPI)})
    res.json(productosUser)
}

const getProductosPendientes = async (req, res) => {
    const productos = await Producto.find({estado:'Pendiente'})
    res.json(productos)
}

const aumentarProducto = async (req, res )=> {
    const productoUpdate = await Producto.updateMany({_id:req.body._id},{$set: {cantidad_existente:req.body.cantidad_existente}})
    res.json(req.body)
}

const setEstado = async (req, res )=> {
    const productoUpdate = await Producto.updateMany({_id:req.body._id},{$set: {estado:req.body.estado}})
    res.json(req.body)
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
        categorias:req.body.categaumentarProductoorias,
        cantidad_existente:req.body.cantidad_existente,
        estado:'Pendiente'
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

const getClienteMasProductoVenta = async (req, res) => {
    const productosUser = await Producto.aggregate([{$match: {estado: "Aceptado",cantidad_existente: { $gt: 0 }}},
    {$group: {_id: "$vendedor.DPI",vendedor: { $first: "$vendedor" },cantidad_existente: { $sum: 1 }}},
    {$sort: {cantidad: -1}},{$limit: 10}])
    res.json(productosUser)
}



module.exports = {
    getProductos:getProductos,
    getImgProducto:getImgProducto,
    descontarProducto:descontarProducto,
    getProductosUser:getProductosUser,
    upload:upload,
    saveProducto:saveProducto,
    aumentarProducto:aumentarProducto,
    getProductosPendientes:getProductosPendientes,
    setEstado:setEstado,
    getProductosUserRechazado:getProductosUserRechazado,
    getProductosUserPendinte:getProductosUserPendinte,
    getClienteMasProductoVenta:getClienteMasProductoVenta
}