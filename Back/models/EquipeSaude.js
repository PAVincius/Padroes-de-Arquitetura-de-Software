const mongoose = require('mongoose');

const EquipeSaudeSchema = new mongoose.Schema({
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

const EquipeSaude = mongoose.model('EquipeSaude', EquipeSaudeSchema);

module.exports = EquipeSaude;
