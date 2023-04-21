const express = require('express')
const ControllerProducto = require('../controllers/ProductoController')


const router = express.Router();

router.get('/get-productos',ControllerProducto.getProductos)
router.get('/get-img-producto',ControllerProducto.getImgProducto)





module.exports = router;