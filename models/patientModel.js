const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter a patient name"]
    },
    surname: {
        type: String,
        require: [true, "Please enter a patient surname"]
    },
    gender: {
        type: String,
        require: [true, "Please enter a patient gender"]
    },
    dob: {
        type: String,
        require: [true, "Please enter a patient data of birth"]
    },
    country: {
        type: String,
        require: false,
    },
    address: {
        type: String,
        require: false,
    },
    city: {
        type: String,
        require: false,
    },
    postal: {
        type: String,
        require: false,
    }
}, {
    timestamps: true
})

const patient = mongoose.model('Patient', patientSchema);
module.exports = patient;