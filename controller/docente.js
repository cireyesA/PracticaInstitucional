const Docente = require("../models/docente");

const getAllDocentes = async (req, res) => {
    try {
        const docentes = await Docente.getAll();
        res.json(docentes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getDocenteById = async (req, res) => {
    try {
        const docente = await Docente.getById(req.params.id);
        if (!docente) {
            return res.status(404).json({ message: 'Docente no encontrado' });
        }
        res.json(docente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createDocente = async (req, res) => {
    const { idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario } = req.body;
    console.log(`Creando docente con ID: ${idDocente}`);
    try {
        const nuevoDocente = await Docente.create(idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario);
        return res.status(201).json(nuevoDocente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateDocente = async (req, res) => {
    const { idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario } = req.body;
    try {
        const actualizarDocente = await Docente.update(idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario);
        return res.status(200).json(actualizarDocente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteDocente = async (req, res) => {
    try {
        await Docente.delete(req.params.id);
        res.json({ message: 'Docente eliminado correctamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllDocentes,
    getDocenteById,
    createDocente,
    updateDocente,
    deleteDocente
};