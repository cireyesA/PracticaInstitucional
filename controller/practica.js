const Practica = require("../models/practica");

const getAllPracticas = async (req, res) => {
    try {
        const practicas = await Practica.getAll();
        res.json(practicas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPracticaById = async (req, res) => {
    try {
        const practica = await Practica.getById(req.params.id);
        if (!practica) {
            return res.status(404).json({ message: 'Práctica no encontrada' });
        }
        res.json(practica);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createPractica = async (req, res) => {
    const { idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica } = req.body;
    console.log(`Creando práctica con ID: ${idPractica}`);
    try {
        const nuevaPractica = await Practica.create(idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica);
        return res.status(201).json(nuevaPractica);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updatePractica = async (req, res) => {
    const { idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica } = req.body;
    try {
        const actualizarPractica = await Practica.update(idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica);
        return res.status(200).json(actualizarPractica);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deletePractica = async (req, res) => {
    try {
        await Practica.delete(req.params.id);
        res.json({ message: 'Práctica eliminada correctamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPracticasByEstudiante = async (req, res) => {
    try {
        const practicas = await Practica.getByEstudiante(req.params.idEstudiante);
        res.json(practicas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPracticasByDocente = async (req, res) => {
    try {
        const practicas = await Practica.getByDocente(req.params.idDocente);
        res.json(practicas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPracticasByEstado = async (req, res) => {
    try {
        const practicas = await Practica.getByEstado(req.params.estado);
        res.json(practicas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPracticasConInfo = async (req, res) => {
    try {
        const practicas = await Practica.getPracticasConInfo();
        res.json(practicas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllPracticas,
    getPracticaById,
    createPractica,
    updatePractica,
    deletePractica,
    getPracticasByEstudiante,
    getPracticasByDocente,
    getPracticasByEstado,
    getPracticasConInfo
};