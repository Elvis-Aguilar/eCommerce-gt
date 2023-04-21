const express = require('express')
const controllerVenta = require('../controllers/VentaProductoController')


const router = express.Router();

router.post('/save-venta',controllerVenta.saveVenta)


module.exports = router;