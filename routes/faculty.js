const express = require('express');
const { facultyLoginController, createAssignmentController } = require('../controllers/facultyController');
const router = express.Router();

// faculty login || POST
router.post('/facultylogin', facultyLoginController)

// create assignment|| POST
router.post('/createassignment',createAssignmentController)
module.exports=router