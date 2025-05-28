const express = require('express');
const Estudiante = require("../controller/estudiante");
const router = express.Router();

router.get('/', Estudiante.getAllEstudiantes);
router.get('/:id', Estudiante.getEstudianteById);
router.get('/programa/:idPrograma', Estudiante.getEstudiantesByPrograma);
router.post('/', Estudiante.createEstudiante);
router.put('/:id', Estudiante.updateEstudiante);
router.delete('/:id', Estudiante.deleteEstudiante);

module.exports = router;