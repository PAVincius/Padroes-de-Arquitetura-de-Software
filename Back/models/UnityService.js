// Import the Mongoose library
const mongoose = require('mongoose');

const UnityServiceSchema = new mongoose.Schema({
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
    // Define an 'arrayEquipes' property of type Array containing ObjectIds that reference the 'EquipeSaude' model
    arrayEquipes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'EquipeSaude'
    },
    // Define a 'numEquipes' property of type Number that is required
    numEquipes: {
        type: Number,
        required: true
    }
});

// Create a Mongoose model for UnityService using the defined schema
const UnityService = mongoose.model('UnityService', UnityServiceSchema);

// Export the UnityService model from the module so it can be used in other parts of the application
module.exports = UnityService;
