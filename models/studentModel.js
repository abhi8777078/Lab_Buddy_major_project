const mongoose = require('mongoose');
studentSchema = new mongoose.Schema({
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
    branch: {
        type: String,
        required: true,
        enum:['CS','CSE','CSDS','IT','ECE','EN']
    },
    section: {
        type: String,
        required: true,
        enum:['A','B','C']
    },
    rollno: {
        type: Number,
        required:true
    },
    year: {
        type: Number,
        required:true
    }
})
module.exports = mongoose.model("students", studentSchema);