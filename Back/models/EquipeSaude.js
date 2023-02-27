// Import the Mongoose library
const mongoose = require('mongoose');

// Define a new Mongoose schema for healthcare teams
const EquipeSaudeSchema = new mongoose.Schema({
    // Define an 'id' property of type String that is required and unique
    id: {
        type: String,
        required: true,
        unique: true
    },
    // Define a 'name' property of type String that is required
    name: {
        type: String,
        required: true
    },
    // Define an 'arrayPatients' property of type Array that contains ObjectIds that reference 'Paciente' model
    arrayPatients: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Paciente'
    },
    // Define a 'numProfissionais' property of type Number that is required
    numProfissionais: {
        type: Number,
        required: true
    }
});

// Create a Mongoose model for healthcare teams using the defined schema
const EquipeSaude = mongoose.model('EquipeSaude', EquipeSaudeSchema);

// Export the EquipeSaude model from the module so it can be used in other parts of the application
module.exports = EquipeSaude;
