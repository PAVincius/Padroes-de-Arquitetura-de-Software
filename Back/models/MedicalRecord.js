const mongoose = require('mongoose');

const MedicalRecordSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    arrayPatients: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Paciente'
    },
    numProfissionais: {
        type: Number,
        required: true
    }
});

const MedicalRecord = mongoose.model('MedicalRecord', MedicalRecordSchema);

module.exports = MedicalRecord;