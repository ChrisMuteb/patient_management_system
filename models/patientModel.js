const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
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
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;