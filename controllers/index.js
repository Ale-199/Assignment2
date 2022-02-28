// Author:Alejandro zhengzheng
//Student ID: 301083081
// Date:2022 - 02 -28


exports.home = function(req, res, next) {
    res.render('home', {
        title: 'Home',
        userName: req.user ? req.user.username : ''
    });
}

exports.about = function(req, res, next) {
    res.render('about', {
        title: 'about',
        userName: req.user ? req.user.username : ''
    }); //respond render
}

exports.project = function(req, res, next) {
    res.render('projects', {
        title: 'Projects',
        userName: req.user ? req.user.username : ''
    });
}

exports.services = function(req, res, next) {
    res.render('services', {
        title: 'services',
        userName: req.user ? req.user.username : ''
    }); //respond render
}

exports.contactMe = function(req, res, next) {
    res.render('contactMe', {
        title: 'contactMe',
        userName: req.user ? req.user.username : ''
    }); //respond render
}