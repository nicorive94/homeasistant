const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pacienteSchema = new Schema({
    nombre: String,
    apellido: String,
    fecha: String,
})

// crear modelo

const Paciente = mongoose.model('rutasWeb', pacienteSchema);

module.exports = Paciente;