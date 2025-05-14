const express = require('express');
const Usuario = require("../controller/usuario");
const router = express.Router();

router.get('/', Usuario.getAllUsuarios);
router.get('/:id', Usuario.getUsuarioById);
router.post('/', Usuario.createUsuario);
router.put('/', Usuario.updateUsuario);
router.delete('/:id', Usuario.deleteUsuario);

module.exports = router;