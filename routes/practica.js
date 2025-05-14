const express = require('express');
const Practica = require("../controller/practica");
const router = express.Router();

router.get('/', Practica.getAllPracticas);
router.get('/info', Practica.getPracticasConInfo);
router.get('/:id', Practica.getPracticaById);
router.get('/estudiante/:idEstudiante', Practica.getPracticasByEstudiante);
router.get('/docente/:idDocente', Practica.getPracticasByDocente);
router.get('/estado/:estado', Practica.getPracticasByEstado);
router.post('/', Practica.createPractica);
router.put('/', Practica.updatePractica);
router.delete('/:id', Practica.deletePractica);

module.exports = router;