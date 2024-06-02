const studentModel = require("../models/studentModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createAssignmentModel=require("../models/createAssignmentModel");
const submitAssignment = require("../models/submitAssignment");

const studentloginController = async(req,res) => {
    try {
        const user = await studentModel.findOne({ email: req.body.email });
        if (!user) {
            return res.send({
                success: false,
                message: "User not exists ",
            })
        }
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

// get all assignment 
const getassignmentController = async(req,res) => {
    try {
        const assignment = await createAssignmentModel.find();
        res.send(assignment);
        // console.log(assignment)
    } catch (error) {
        console.log(error)
        return res.send({
            success: false,
            message: "error in login controller",
            error
        })
    }
}

// submit assignment
const submitassignmentController = async(req,res) => {
    try {
        const assignment = new submitAssignment(req.body);
        await assignment.save();
        return res.send({
            success: true,
            message: "assignment submit successfully !",
            assignment
        })
    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            message: "error in submitassignmentController",
            error
        })
    }
}

// get submitted assignment 
const getsubmittedassignmentController = async (req, res) => {
    try {
        const assignment = await submitAssignment.find();
        res.send(assignment)
    } catch (error) {
        console.log(error)
        return res.send({
            success: false,
            message: "error in getsubmittedassignmentController",
            error
        })
    }
}
module.exports={studentloginController,getassignmentController,submitassignmentController,getsubmittedassignmentController}