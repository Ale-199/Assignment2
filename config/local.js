// Author:Alejandro zhengzheng
//Student ID: 301083081
// Date:2022 - 02 -28

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function() {
    console.log('====> LocalStrategy function')

    passport.use(new LocalStrategy(authLocal));
};

function authLocal(username, password, done) {
    console.log('====> authLocal function');

    User.findOne({ username: username }, (err, user) => {
        if (err) {
            return done(err);
        }
        //if don't have a user, execute the following code
        if (!user) {
            return done(null, false, { message: 'Unknown user' });
        }
        //if don't authnticate the password, exexute the following code
        if (!user.authenticate(password)) {
            return done(null, false, { message: 'Invalid password' });
        }
        //if don't have error, have the user, and the password is correct, then send the return
        return done(null, user);
    });
}