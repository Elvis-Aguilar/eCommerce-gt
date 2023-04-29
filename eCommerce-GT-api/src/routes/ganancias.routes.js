const express = require('express')
const controllerGanancia = require('../controllers/GananciasController')


const router = express.Router();

router.post('/save-ganancia',controllerGanancia.saveGanancia)
router.get('/get-cliente-mas-ganancias',controllerGanancia.getClienteMasGanancias)



module.exports = router;