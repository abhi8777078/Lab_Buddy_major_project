const mongoose = require('mongoose');

const submitAssignment = new mongoose.Schema({
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
    name: {
        type: String,
        required:true
    },
    submitstatus: {
        type: Boolean,
        default: true
    },
    labanswer: {
        type: String,
        required:true
    }
})
module.exports = mongoose.model("submitassignment", submitAssignment);