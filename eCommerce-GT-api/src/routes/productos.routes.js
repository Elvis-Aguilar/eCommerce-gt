const express = require('express')
const ControllerProducto = require('../controllers/ProductoController')


const router = express.Router();

router.get('/get-productos',ControllerProducto.getProductos)
router.get('/get-img-producto',ControllerProducto.getImgProducto)
router.get('/get-producto-user',ControllerProducto.getProductosUser)
router.get('/get-producto-user-pendiente',ControllerProducto.getProductosUserPendinte)
router.get('/get-producto-user-rechazado',ControllerProducto.getProductosUserRechazado)
router.get('/get-producto-pendientes',ControllerProducto.getProductosPendientes)
router.post('/save-producto',ControllerProducto.saveProducto)
router.put('/umentar-cantidad',ControllerProducto.aumentarProducto)
router.put('/set-Estado',ControllerProducto.setEstado)

router.get('/get-cliente-mas-productos',ControllerProducto.getClienteMasProductoVenta)



router.post('/save-img-producto', ControllerProducto.upload.single('imagen'), function(req, res) {
    const fileName = req.file.originalname;
    res.json('/img/img_productos/'+fileName);
  });




module.exports = router;