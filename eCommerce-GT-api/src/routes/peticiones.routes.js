const express = require('express')
const controllerPeticiones = require('../controllers/PeticionesController')


const router = express.Router();

router.post('/save-peticion',controllerPeticiones.savePeticion)
router.get('/get-peticion-curso',controllerPeticiones.getPeticionEnCuros)
router.get('/get-peticion-curso-all',controllerPeticiones.getPeticionEnCurosAll)
router.get('/get-peticion-entregados',controllerPeticiones.getPeticionEntregado)
router.put('/set-estado',controllerPeticiones.setEstadoEntregado)




module.exports = router;