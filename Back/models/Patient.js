// Import the Mongoose library
const mongoose = require('mongoose')

// Import the MedicalRecord schema from the 'MedicalRecord.js' module
const {medicalRecordSchema} = require('./MedicalRecord')

// Define a new Mongoose schema for Patient
const PatientSchema = new mongoose.Schema({
    // Define a 'typeAttendance' property of type String that is required
    typeAttendance : {
        type : String,
        required : true
    },
    // Define a 'situation' property of type String that is required
    situation: {
        type : String,
        required : true
    },
    // Define a 'medicalRecord' property of type 'medicalRecordSchema' that is required
    medicalRecord: {
        type: medicalRecordSchema,
        required : true
    },
    // Define an 'updated' property of type Date that defaults to the current date and time
    updated: { type: Date, default: Date.now },
})

// Create a Mongoose model for Patient using the defined schema
const Patient = mongoose.model('Patient',PatientSchema)

// Export the Patient model from the module so it can be used in other parts of the application
module.exports = Patient
