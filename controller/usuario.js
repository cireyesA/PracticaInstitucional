const Usuario = require("../models/usuario");

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.getAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.getById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createUsuario = async (req, res) => {
    const { idUsuario, contrasena } = req.body;
    console.log(`Creando usuario con ID: ${idUsuario}`);
    try {
        const nuevoUsuario = await Usuario.create(idUsuario, contrasena);
        return res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateUsuario = async (req, res) => {
    const { idUsuario, contrasena } = req.body;
    try {
        const actualizarUsuario = await Usuario.update(idUsuario, contrasena);
        return res.status(200).json(actualizarUsuario);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteUsuario = async (req, res) => {
    try {
        await Usuario.delete(req.params.id);
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};