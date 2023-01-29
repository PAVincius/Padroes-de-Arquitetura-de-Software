const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    typeAttendance: {
        type: String,
        required: true
    },
    medicalRecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalRecord'
    },
    situation: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    }
});

const Paciente = mongoose.model('Paciente', PacienteSchema);

module.exports = Paciente;