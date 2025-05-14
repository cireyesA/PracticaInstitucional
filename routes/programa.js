const express = require('express');
const Programa = require("../controller/programa");
const router = express.Router();

router.get('/', Programa.getAllProgramas);
router.get('/:id', Programa.getProgramaById);
router.post('/', Programa.createPrograma);
router.put('/', Programa.updatePrograma);
router.delete('/:id', Programa.deletePrograma);

module.exports = router;