// Author:Alejandro zhengzheng
//Student ID: 301083081
// Date:2022 - 02 -28
let express = require('express');
let router = express.Router();
let businessController = require('../controllers/businessList');

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next(); //if yes, will process the next function
}

router.get('/businessContactList', businessController.businessContactList);

/* GET Route for displaying the update page - CREATE Operation */
router.get('/add', requireAuth, businessController.displayUpdatePage);

/* POST Route for processing the Upate page - CREATE Operation */
router.post('/add', requireAuth, businessController.processUpdatePage);

// Routers for edit
router.get('/edit/:id', requireAuth, businessController.displayEditPage);
router.post('/edit/:id', requireAuth, businessController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;