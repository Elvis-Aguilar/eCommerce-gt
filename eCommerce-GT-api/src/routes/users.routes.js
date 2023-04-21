const express = require('express')
const controllerUser = require('../controllers/UserControllers')


const router = express.Router();

router.get('/user-sesion',controllerUser.getUsuario)

router.post('/save-user', controllerUser.saveUsuario)

module.exports = router;