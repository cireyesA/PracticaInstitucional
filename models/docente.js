const db = require('../config/mysql');

const Docente = {
    getAll: async () => {
        const [rows] = await db.query('SELECT idDocente, tipoContratacion, salario, idUsuario FROM Docente');
        return rows;
    },
    
    getById: async (idDocente) => {
        const [rows] = await db.query('SELECT idDocente, tipoContratacion , salario, idUsuario  FROM Docente WHERE idDocente = ?', 
            [idDocente]);
        return rows[0];
    },
    
    create: async (idDocente, tipoContratacion, salario, idUsuario) => {
        console.log(`Creando docente con ID: ${idDocente}`);
        const [result] = await db.query(
            'INSERT INTO Docente (idDocente, tipoContratacion, salario, idUsuario) VALUES (?, ?, ?, ?)', 
            [idDocente, tipoContratacion,salario, idUsuario]
        );
        return { idDocente, tipoContratacion,salario, idUsuario };
    },
    
    update: async (idDocente, tipoContratacion,salario, idUsuario) => {
        const [result] = await db.query(
            'UPDATE Docente SET tipoContratacion = ?, salario = ?, idUsuario = ? WHERE idDocente = ?', 
            [tipoContratacion, salario, idUsuario, idDocente]
        );

        if (result.affectedRows === 0) {
            // No se actualizó nada porque el ID no existe
            throw new Error(`Docente no encontrado.`);
        }
    
        return { idDocente, tipoContratacion, salario, idUsuario };
    },
    
    delete: async (idDocente) => {
        const [result] = await db.query('DELETE FROM Docente WHERE idDocente = ?', [idDocente]);
        return { idDocente };
    }
};
module.exports = Docente;