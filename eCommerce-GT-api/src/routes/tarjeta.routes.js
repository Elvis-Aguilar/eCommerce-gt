const express = require('express')
const controllerTarjet = require('../controllers/TarjetaController')

const router = express.Router();

router.get('/get-tarjetas',controllerTarjet.getTarjetas)

router.post('/save-tarjeta', controllerTarjet.saveTarjeta)

module.exports = router;