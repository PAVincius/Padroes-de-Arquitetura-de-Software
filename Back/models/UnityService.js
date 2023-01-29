const mongoose = require('mongoose');

const UnityServiceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    arrayEquipes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'EquipeSaude'
    },
    numEquipes: {
        type: Number,
        required: true
    }
});

const UnityService = mongoose.model('UnityService', UnityServiceSchema);

module.exports = UnityService;
