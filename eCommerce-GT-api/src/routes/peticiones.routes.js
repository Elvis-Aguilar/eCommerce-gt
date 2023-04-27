const express = require('express')
const controllerPeticiones = require('../controllers/PeticionesController')


const router = express.Router();

router.post('/save-peticion',controllerPeticiones.savePeticion)
router.get('/get-peticion-curso',controllerPeticiones.getPeticionEnCuros)
router.get('/get-peticion-entregados',controllerPeticiones.getPeticionEntregado)



module.exports = router;