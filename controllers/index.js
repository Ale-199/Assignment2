exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
}

exports.project = function(req, res, next) {
    res.render('index', { title: 'Project' });
}