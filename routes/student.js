const express = require('express');
const { studentloginController, getassignmentController, submitassignmentController, getsubmittedassignmentController } = require('../controllers/studentController');
const router = express.Router();

// STUDENT LOGIN || POST
router.post('/studentlogin', studentloginController)

// GET ALL ASSIGNMENT || GET
router.get('/getassignment', getassignmentController)

// SUBMIT ASSIGNMENT || POST
router.post('/submitassignment',submitassignmentController)

// get submitted assignment || get
router.get('/getsubmittedassignment',getsubmittedassignmentController)
module.exports=router