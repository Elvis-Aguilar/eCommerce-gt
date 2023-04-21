const express = require('express')
const ControllerCategoria = require('../controllers/CategoriasController')


const router = express.Router();

router.get('/get-categorias',ControllerCategoria.getCategorias)

router.get('/get-img-categoria',ControllerCategoria.getImgCategoria)




module.exports = router;