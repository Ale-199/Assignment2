// Author:Alejandro zhengzheng
//Student ID: 301083081
// Date:2022 - 02 -05

var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')

/* GET users listing. */
router.get('/', userController.user);


router.get('/Ale', userController.alejandro);

module.exports = router;