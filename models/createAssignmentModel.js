const mongoose = require('mongoose')

const CreateAssignmentSchema = new mongoose.Schema({
    labstatement: {
        type: String,
        required:true
    },
    branch: {
        type: String,
        required: true,
        enum: ['CS', 'CSE', 'CSDS', 'IT', 'ECE', 'EN']
    },
    section: {
        type: String,
        required: true,
        enum:['A','B','C']
    },
    year: {
        type: Number,
        required:true
    },
    labcode: {
        type: String,
        required:true
    },
    submitstatus: {
        type: Boolean,
        default:false
    },
    lastdate: {
        type: String,
        required:true
    }
    
})
module.exports = mongoose.model("createassignment", CreateAssignmentSchema);