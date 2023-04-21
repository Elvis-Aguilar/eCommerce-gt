const express = require('express')
const controllerGanancia = require('../controllers/GananciasController')


const router = express.Router();

router.post('/save-ganancia',controllerGanancia.saveGanancia)


module.exports = router;