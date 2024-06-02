const facultyModel = require("../models/facultyModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createAssignmentModel = require("../models/createAssignmentModel");

// login
const facultyLoginController = async(req,res) => {
    try {
        const user = await facultyModel.findOne({ email: req.body.email });
        if (!user) {
            return res.send({
                success: false,
                message: "User not exists ",
            })
        }
        // const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if (req.body.password!=user.password) {
            return res.send({
                success: false,
                message: "Invalide Password ",
            })
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        return res.send({
            success: true,
            message: "Login SuccessFully !",
            token,
            user
        })
    } catch (error) {
        console.log(error)
        return res.send({
            success: false,
            message: "error in login controller",
            error
        })
    }
}

// create assignment
const createAssignmentController = async(req,res) => {
    try {
        const user = new createAssignmentModel(req.body);
        await user.save();
        return res.send({
            success: true,
            message: "Assignment created successfully !",
            user
        })
    }
    catch (error) {
        console.log(error)
        return res.send({
            success: false,
            message: "error in create assignment",
            error
        })
    }
}
module.exports={facultyLoginController,createAssignmentController}