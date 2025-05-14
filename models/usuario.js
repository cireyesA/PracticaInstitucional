const db = require('../config/mysql');

const Usuario = {
    getAll: async () => {
        const [rows] = await db.query('SELECT idUsuario, contrasena FROM Usuario');
        return rows;
    },
    
    getById: async (idUsuario) => {
        const [rows] = await db.query('SELECT idUsuario, contrasena FROM Usuario WHERE idUsuario = ?', [idUsuario]);
        return rows[0];
    },
    
    create: async (idUsuario, contrasena) => {
        console.log(`Creando usuario con ID: ${idUsuario}`);
        const [result] = await db.query('INSERT INTO Usuario (idUsuario, contrasena) VALUES (?, ?)', 
            [idUsuario, contrasena]);
        return { idUsuario, contrasena };
    },
    
    update: async (idUsuario, contrasena) => {
        const [result] = await db.query('UPDATE Usuario SET contrasena = ? WHERE idUsuario = ?', 
            [contrasena, idUsuario]);
        return { idUsuario, contrasena };
    },
    
    delete: async (idUsuario) => {
        const [result] = await db.query('DELETE FROM Usuario WHERE idUsuario = ?', [idUsuario]);
        return { idUsuario };
    }
};

module.exports = Usuario;