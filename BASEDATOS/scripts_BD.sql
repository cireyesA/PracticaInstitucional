use practicasins;

-- Tabla Usuario
CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY,
    contrasena VARCHAR(45)
);

-- Tabla Programa
CREATE TABLE Programa (
    idPrograma INT PRIMARY KEY,
    nombre VARCHAR(45),
    codigo INT
);
 
-- Tabla Docente
CREATE TABLE Docente (
    idDocente INT PRIMARY KEY,
    primerNombre VARCHAR(45),
    segundoNombre VARCHAR(45),
    primerApellido VARCHAR(45),
    segundoApellido VARCHAR(45),
    correo VARCHAR(60),
    idUsuario INT,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

-- Tabla Estudiante
CREATE TABLE Estudiante (
    idEstudiante INT PRIMARY KEY,
    primerNombre VARCHAR(45),
    segundoNombre VARCHAR(45),
    primerApellido VARCHAR(45),
    segundoApellido VARCHAR(45),
    codigoEstudiante INT,
    correo VARCHAR(60),
    idUsuario INT,
    idPrograma INT,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (idPrograma) REFERENCES Programa(idPrograma)
);

-- Tabla OfertaPractica
CREATE TABLE OfertaPractica (
    idOfertaPractica INT PRIMARY KEY,
    titulo VARCHAR(45),
    descripcion VARCHAR(200),
    fechaPublicacion DATETIME
);

-- Tabla Practica
CREATE TABLE Practica (
    idPractica INT PRIMARY KEY,
    idEstudiante INT,
    idDocente INT,
    fechaInicio DATETIME,
    fechaFin DATETIME,
    estado VARCHAR(45),
    idOfertaPractica INT,
    FOREIGN KEY (idEstudiante) REFERENCES Estudiante(idEstudiante),
    FOREIGN KEY (idDocente) REFERENCES Docente(idDocente),
    FOREIGN KEY (idOfertaPractica) REFERENCES OfertaPractica(idOfertaPractica)
);