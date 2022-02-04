// Author:Alejandro zhengzheng
//Student ID: 301083081
// Date:2022 - 02 -05

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);


//projects page
router.get('/projects', indexController.project);


// about page
router.get('/about', function(req, res, next) {
    res.render('index', { title: 'Projects' }); //respond render
});

// services page
router.get('/services', function(req, res, next) {
    res.render('index', { title: 'services' }); //respond render
});

// Contact page
router.get('/services', function(req, res, next) {
    res.render('index', { title: 'contact' }); //respond render
});
module.exports = router;