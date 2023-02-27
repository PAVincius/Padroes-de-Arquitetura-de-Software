// Import the Mongoose library
const mongoose = require('mongoose')

// Define a new Mongoose schema for medical records
const medicalRecordSchema = new mongoose.Schema({
    // Define a 'name' property of type String that is required
    name: {
        type: String,
        required: true
    },
    // Define a 'sex' property of type String that references a 'Paciente' model
    sex: {
        type: String,
        ref: 'Paciente'
    },
    // Define a 'birthdate' property of type String that is required
    birthdate: {
        type: String,
        required: true
    },
    // Define a 'fathername' property of type String that is required
    fathername: {
        type: String,
        required: true
    },
    // Define a 'mothername' property of type String that is required
    mothername: {
        type: String,
        required: true
    },
    // Define a 'diagnosis' property of type String that is required
    diagnosis : {
        type : String,
        required : true
    },
    // Define a 'medications' property of type Array that is required
    medications: {
        type : Array,
        required : true
    },
    // Define a 'notes' property of type String that is required
    notes: {
        type : String,
        required : true
    },
    // Define an 'updated' property of type Date that defaults to the current date and time
    updated: { type: Date, default: Date.now },
})

// Create a Mongoose model for medical records using the defined schema
const MedicalRecord = mongoose.model('MedicalRecord',medicalRecordSchema)

// Export the MedicalRecord model and medicalRecordSchema from the module so they can be used in other parts of the application
module.exports = {
    MedicalRecord,
    medicalRecordSchema
};
