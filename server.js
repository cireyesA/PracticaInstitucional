const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const usuario = require('./routes/usuario');
const programa = require('./routes/programa');
const docente = require('./routes/docente');
const estudiante = require('./routes/estudiante');
const ofertaPractica = require('./routes/ofertaPractica');
const practica = require('./routes/practica');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/usuarios', usuario);
app.use('/api/programas', programa);
app.use('/api/docentes', docente);
app.use('/api/estudiantes', estudiante);
app.use('/api/ofertas-practicas', ofertaPractica);
app.use('/api/practicas', practica);

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`El servicio está corriendo en el puerto ${PORT}`);
});
