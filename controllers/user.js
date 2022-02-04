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