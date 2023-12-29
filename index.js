const express = require('express')
const mongoose = require('mongoose');
const patient = require('./models/patientModel');
const app = express()
const port = 3001

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/patient', async (req, res) => {
    try {
        const patient = await patient.create(req.body);
        res.status(200).json(patient);
    } catch (error) {
        console.log('failed to add a patient');
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