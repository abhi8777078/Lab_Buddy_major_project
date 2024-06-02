const express=require('express');
const { loginController, registerController, addstudentController, addfacultyController, addsubjectController, showallstudentController, showallteacherController, showallsubjectController } = require('../controllers/authController');
const router = express.Router();

// Register || POST
router.post('/register', registerController)

// Login ||POST
router.post('/login', loginController)

// Add Student || POST
router.post('/addstudent', addstudentController)

// ADD FACULTY || POST
router.post('/addfaculty', addfacultyController)

// ADD Student || POST
router.post('/addsubject', addsubjectController)

// GET || SHOW ALL STUDENT 
router.get('/showallstudent', showallstudentController)

// GET || SHOW ALL TEACHER 
router.get('/showallfaculty', showallteacherController)

// GET || SHOW ALL TEACHER 
router.get('/showallsubject',showallsubjectController)
module.exports=router