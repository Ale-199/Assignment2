// Author:Alejandro zhengzheng
//Student ID: 301083081
// Date:2022 - 02 -28

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);

// about page
router.get('/about', indexController.about);


//projects page
router.get('/projects', indexController.project);


// services page
router.get('/services', indexController.services);

// Contact page
router.get('/contactMe', indexController.contactMe);



module.exports = router;