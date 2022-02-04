// Author:Alejandro zhengzheng
//Student ID: 301083081
// Date:2022 - 02 -05

exports.user = function(req, res, next) {
    res.render('user', {
        title: 'Users',
        name: 'Student'
    });
}


exports.alejandro = function(req, res, next) {
    res.render('user', {
        title: 'User',
        name: 'Alejandro'
    });
}