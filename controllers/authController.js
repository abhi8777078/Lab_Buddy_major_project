const userModel = require("../models/userModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const studentModel = require("../models/studentModel");
const facultyModel = require("../models/facultyModel");
const subjectModel = require("../models/subjectModel");

// ADMIN LOGIN
const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.send({
                success: false,
                message: "User not exists ",
            })
        }
        const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if (!comparePassword) {
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
// ADMIN REGISTER
const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.send({
                success: false,
                message: "User already exists ",
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword

        const user = new userModel(req.body);
        await user.save();

        return res.send({
            success: true,
            message: "User registration successfully !",
            user
        })
    } catch (error) {
        console.log(error)
        return res.send({
            success: false,
            message: "error in register controller",
            error
        })
    }
}

// ADD STUDENT 
const addstudentController = async (req, res) => {
    try {
        const existingStudent = await studentModel.findOne({ email: req.body.email });
        if (existingStudent) {
            return res.send({
                success: false,
                message: "Student already exists ",
            })
        }
        const user = new studentModel(req.body);
        await user.save();

        return res.send({
            success: true,
            message: "Student Added successfully !",
            user
        })
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            message: "error in ADD STUDENT controller",
            error
        })
    }
}

const addfacultyController = async (req, res) => {
    try {
        const existingFaculty = await facultyModel.findOne({ email: req.body.email });
        if (existingFaculty) {
            return res.send({
                success: false,
                message: "Faculty already exists ",
            })
        }

        const user = new facultyModel(req.body);
        await user.save();
        return res.send({
            success: true,
            message: "Faculty Added successfully !",
            user
        })
    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            message: "error in ADD faculty controller",
            error
        })
    }
}

// ADD SUBJECT 
const addsubjectController = async (req, res) => {
    try {
        const existingSubject = await subjectModel.findOne({ labCode: req.body.labCode });
        if (existingSubject) {
            return res.send({
                success: false,
                message: "Subject already exists ",
            })
        }
        const subject = new subjectModel(req.body);
        await subject.save();
        return res.send({
            success: true,
            message: "Subject Added successfully !",
            subject
        })

    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            message: "error in ADD Subject controller",
            error
        })
    }
}

// SHOW ALL STUDENT
const showallstudentController = async (req, res) => {
    try {
        const student = await studentModel.find();
        res.send(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// SHOW ALL TEACHERS 
const showallteacherController = async(req,res) => {
    try {
        const faculty = await facultyModel.find();
        res.send(faculty);
    } catch (error ) {
        res.send({message:error.message})
    }
}
// SHOW ALL SUBJECT 
const showallsubjectController = async(req,res) => {
    try {
        const subject = await subjectModel.find();
        res.send(subject);
    } catch (error) {
        res.send({message:error.message})
    }
}
module.exports = { registerController, loginController, addstudentController, addfacultyController, addsubjectController, showallstudentController ,showallteacherController,showallsubjectController}