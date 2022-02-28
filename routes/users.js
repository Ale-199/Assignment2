// Author:Alejandro zhengzheng
//Student ID: 301083081
// Date:2022 - 02 -28

var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')

/* GET users listing. */
router.get('/', userController.user);


router.get('/Ale', userController.alejandro);

// Sign-up
router.get('/signup', userController.renderSignup);
router.post('/signup', userController.signup);

// Sign-in
router.get('/signin', userController.renderSignin);
router.post('/signin', userController.signin);

// Sign out
router.get('/signout', userController.signout);

module.exports = router;