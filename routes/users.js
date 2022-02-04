var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.get('/Ale', function(req, res, next) {
    res.send('Ayo, I am ALe');
});

module.exports = router;