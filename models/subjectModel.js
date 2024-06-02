const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    labName: {
        type: String,
        required:true
    },
    labCode: {
        type: String,
        required:true
    },
    faculty: {
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
    year: {
        type: Number,
        required:true
    }
})
module.exports = mongoose.model("subject", subjectSchema);