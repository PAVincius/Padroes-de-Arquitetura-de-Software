// Importing required modules and packages
const express = require('express')
const cors = require('cors')
const app = express()

// Adding middleware for parsing JSON and enabling CORS
app.use(express.json())
app.use(cors())

// Specifying port number and starting the server
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})

// Connecting to MongoDB Atlas cluster
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const DB = 'mongodb+srv://clusterpavincius:y2s43cOFmeI12KBB@cluster0.nij4pw1.mongodb.net/test'
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})

// Importing the Patient model from a separate file
const Patient = require('./model/Patient')

// Route for adding a new patient to the database
app.post('/add-patient', async(req,res) => {
    const patientData = new Patient(req.body)
    try{
        await patientData.save()
        res.status(201).json({
            status: 'Success',
            data : {
                patientData
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    } 
})

// Route for getting all patients from the database
app.get('/get-patient', async (req,res) => {
    const patientDatas = await Patient.find({})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                patientDatas
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

// Route for updating an existing patient in the database
app.patch('/update-patient/:id', async (req,res) => {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
    })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedPatient
            }
        })
    }catch(err){
        console.log(err)
    }
})

// Route for deleting an existing patient from the database
app.delete('/delete-patient/:id', async(req,res) => {
    await Patient.findByIdAndDelete(req.params.id)
    
    try{
      res.status(204).json({
          status : 'Success',
          data : {}
      })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})
