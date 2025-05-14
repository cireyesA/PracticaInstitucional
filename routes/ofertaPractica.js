const express = require('express');
const OfertaPractica = require("../controller/ofertaPractica");
const router = express.Router();

router.get('/', OfertaPractica.getAllOfertasPracticas);
router.get('/recientes', OfertaPractica.getOfertasPracticasRecientes);
router.get('/:id', OfertaPractica.getOfertaPracticaById);
router.post('/', OfertaPractica.createOfertaPractica);
router.put('/', OfertaPractica.updateOfertaPractica);
router.delete('/:id', OfertaPractica.deleteOfertaPractica);

module.exports = router;