const express = require('express');
const Docente = require("../controller/docente");
const router = express.Router();

router.get('/', Docente.getAllDocentes);
router.get('/:id', Docente.getDocenteById);
router.post('/', Docente.createDocente);
router.put('/:id', Docente.updateDocente);
router.delete('/:id', Docente.deleteDocente);

module.exports = router;