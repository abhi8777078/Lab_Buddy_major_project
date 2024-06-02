const mongoose = require('mongoose')
const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    gender: {
        type: String,
        enum:['male','female']
    },
    branch: {
        type: String,
        required: true,
        enum: ['CS', 'CSE', 'CSDS', 'IT', 'ECE', 'EN']
    },
    contactno: {
        type: Number,
        required:true
    },
    dob: {
        type: String,
        required:true
    },
    joiningyear: {
        type: Number,
        required:true
    }
})
module.exports = mongoose.model('faculty', facultySchema);