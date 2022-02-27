// Author:Alejandro zhengzheng
//Student ID: 301083081
// Date:2022 - 02 -05


exports.home = function(req, res, next) {
    res.render('home', { title: 'Home' });
}

exports.about = function(req, res, next) {
    res.render('about', { title: 'about' }); //respond render
}

exports.project = function(req, res, next) {
    res.render('projects', { title: 'Projects' });
}

exports.services = function(req, res, next) {
    res.render('services', { title: 'services' }); //respond render
}

exports.contactMe = function(req, res, next) {
    res.render('contactMe', { title: 'contactMe' }); //respond render
}