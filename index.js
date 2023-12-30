const express = require('express')
const mongoose = require('mongoose');
const Patient = require('./models/patientModel');
const app = express()
const port = 3001

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/patient', async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(200).json(patient);
    } catch (error) {
        console.log('failed to add a patient');
        res.status(500).json({ message: error.message });
    }
})

app.get('/patient', async (req, res) => {
    try {
        const patients = await Patient.find({});
        res.status(200).json(patients);
    } catch (error) {

        res.status(500).json({ message: error.message });
    }
})

app.get('/patient/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await Patient.findById(id);
        res.status(200).json(patient);
    } catch (error) {

        res.status(500).json({ message: error.message });
    }
})

app.put('/patient/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await Patient.findByIdAndUpdate(id, req.body);
        if (!patient) {
            return res.status(404).json({ message: `cannot find any patient with ID ${id}` })

        }
        const updatedPatient = await Patient.findById(id);
        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.delete('/patient/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await Patient.findByIdAndDelete(id);
        if (!patient) {
            return res.status(404).json({ message: `cannot find any patient with ID ${id}` })

        }
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


mongoose.connect('mongodb://localhost:27017/hospital')
    .then(() => {
        console.log('Connected to DB')
        app.listen(port, () => {
            console.log(`Hospital Management App listening on port ${port}`)
        })
    }).catch((e) => console.log(e));