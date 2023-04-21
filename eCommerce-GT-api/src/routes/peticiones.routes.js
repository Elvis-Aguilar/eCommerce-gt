const express = require('express')
const controllerPeticiones = require('../controllers/PeticionesController')


const router = express.Router();

router.post('/save-peticion',controllerPeticiones.savePeticion)


module.exports = router;