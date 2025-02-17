const mongoose=require('mongoose')

userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'name is required'],
    },
    email: {
        type: String,
        required: [true,'email is required'],
    },
    password: {
        type: String,
        required: [true,'password is required'],
    },
})

module.exports = mongoose.model("users", userSchema);