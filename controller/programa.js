const Programa = require("../models/programa");

const getAllProgramas = async (req, res) => {
    try {
        const programas = await Programa.getAll();
        res.json(programas);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getProgramaById = async (req, res) => {
    try {
        const programa = await Programa.getById(req.params.id);
        if (!programa) {
            return res.status(404).json({ message: 'Programa no encontrado' });
        }
        res.json(programa);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createPrograma = async (req, res) => {
    const { idPrograma, nombre, codigo } = req.body;
    console.log(`Creando programa con ID: ${idPrograma}, nombre: ${nombre}, código: ${codigo}`);
    try {
        const nuevoPrograma = await Programa.create(idPrograma, nombre, codigo);
        return res.status(201).json(nuevoPrograma);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updatePrograma = async (req, res) => {
    const { idPrograma, nombre, codigo } = req.body;
    try {
        const actualizarPrograma = await Programa.update(idPrograma, nombre, codigo);
        return res.status(200).json(actualizarPrograma);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deletePrograma = async (req, res) => {
    try {
        await Programa.delete(req.params.id);
        res.json({ message: 'Programa eliminado correctamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllProgramas,
    getProgramaById,
    createPrograma,
    updatePrograma,
    deletePrograma
};