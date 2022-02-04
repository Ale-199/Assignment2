var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' }); //respond render
});

router.get('/projects', function(req, res, next) {
    res.render('index', { title: 'Projects' }); //respond render
});

module.exports = router;