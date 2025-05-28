const Estudiante = require("../models/estudiante");

const getAllEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.getAll();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getEstudianteById = async (req, res) => {
    try {
        const estudiante = await Estudiante.getById(req.params.id);
        if (!estudiante) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.json(estudiante);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createEstudiante = async (req, res) => {
    const { idEstudiante, codigoEstudiante, idUsuario, idPrograma } = req.body;
    console.log(`Creando estudiante con ID: ${idEstudiante}`);
    try {
        const nuevoEstudiante = await Estudiante.create(idEstudiante, codigoEstudiante, idUsuario, idPrograma);
        return res.status(201).json(nuevoEstudiante);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateEstudiante = async (req, res) => {

    const { idEstudiante, codigoEstudiante, idUsuario, idPrograma } = req.body;
    try {
        const actualizarEstudiante = await Estudiante.update(idEstudiante, codigoEstudiante, idUsuario, idPrograma);
        return res.status(200).json(actualizarEstudiante);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteEstudiante = async (req, res) => {
        console.log('holisss',req.params)
    try {
        await Estudiante.delete(req.params.id);
        res.json({ message: 'Estudiante eliminado correctamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getEstudiantesByPrograma = async (req, res) => {
    try {
        const estudiantes = await Estudiante.getByPrograma(req.params.idPrograma);
        res.json(estudiantes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllEstudiantes,
    getEstudianteById,
    createEstudiante,
    updateEstudiante,
    deleteEstudiante,
    getEstudiantesByPrograma
};