const db = require('../config/mysql');

const Estudiante = {
    getAll: async () => {
        const [rows] = await db.query('SELECT idEstudiante, codigoEstudiante, idUsuario, idPrograma FROM Estudiante');
        return rows;
    },
    
    getById: async (idEstudiante) => {
        const [rows] = await db.query('SELECT idEstudiante, codigoEstudiante, idPrograma FROM Estudiante WHERE idEstudiante = ?', 
            [idEstudiante]);
        return rows[0];
    },
    
    create: async (idEstudiante, codigoEstudiante, idUsuario, idPrograma) => {
        console.log(`Creando estudiante con ID: ${idEstudiante}`);
        const [result] = await db.query(
            'INSERT INTO Estudiante (idEstudiante, codigoEstudiante, idUsuario, idPrograma) VALUES (?, ?, ?, ?)', 
            [idEstudiante, codigoEstudiante, idUsuario, idPrograma]
        );
        return { idEstudiante, codigoEstudiante, idUsuario, idPrograma };
    },
    
    update: async (idEstudiante, codigoEstudiante, idUsuario, idPrograma) => {
        const [result] = await db.query(
            'UPDATE Estudiante SET codigoEstudiante = ?, idUsuario = ?, idPrograma = ? WHERE idEstudiante = ?', 
            [idEstudiante, codigoEstudiante, idUsuario, idPrograma]
        );
        return { idEstudiante, codigoEstudiante, idUsuario, idPrograma};
    },
    
    delete: async (idEstudiante) => {
        const [result] = await db.query('DELETE FROM Estudiante WHERE idEstudiante = ?', [idEstudiante]);
        return { idEstudiante };
    },
    
    getByPrograma: async (idPrograma) => {
        const [rows] = await db.query('SELECT * FROM Estudiante WHERE idPrograma = ?', [idPrograma]);
        return rows;
    }
};

module.exports = Estudiante;