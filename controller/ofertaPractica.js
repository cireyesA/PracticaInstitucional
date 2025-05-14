const OfertaPractica = require("../models/ofertaPractica");

const getAllOfertasPracticas = async (req, res) => {
    try {
        const ofertasPracticas = await OfertaPractica.getAll();
        res.json(ofertasPracticas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getOfertaPracticaById = async (req, res) => {
    try {
        const ofertaPractica = await OfertaPractica.getById(req.params.id);
        if (!ofertaPractica) {
            return res.status(404).json({ message: 'Oferta de práctica no encontrada' });
        }
        res.json(ofertaPractica);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createOfertaPractica = async (req, res) => {
    const { idOfertaPractica, titulo, descripcion, fechaPublicacion } = req.body;
    console.log(`Creando oferta de práctica con ID: ${idOfertaPractica}`);
    try {
        const nuevaOfertaPractica = await OfertaPractica.create(idOfertaPractica, titulo, descripcion, fechaPublicacion);
        return res.status(201).json(nuevaOfertaPractica);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateOfertaPractica = async (req, res) => {
    const { idOfertaPractica, titulo, descripcion, fechaPublicacion } = req.body;
    try {
        const actualizarOfertaPractica = await OfertaPractica.update(idOfertaPractica, titulo, descripcion, fechaPublicacion);
        return res.status(200).json(actualizarOfertaPractica);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteOfertaPractica = async (req, res) => {
    try {
        await OfertaPractica.delete(req.params.id);
        res.json({ message: 'Oferta de práctica eliminada correctamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getOfertasPracticasRecientes = async (req, res) => {
    try {
        const limit = req.query.limit || 10;
        const ofertasRecientes = await OfertaPractica.getRecientes(parseInt(limit));
        res.json(ofertasRecientes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllOfertasPracticas,
    getOfertaPracticaById,
    createOfertaPractica,
    updateOfertaPractica,
    deleteOfertaPractica,
    getOfertasPracticasRecientes
};