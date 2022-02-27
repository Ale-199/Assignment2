let express = require('express');
let router = express.Router();
let businessController = require('../controllers/businessList');

router.get('/businessContactList', businessController.businessContactList);

/* GET Route for displaying the update page - CREATE Operation */
router.get('/add', businessController.displayUpdatePage);

/* POST Route for processing the Upate page - CREATE Operation */
router.post('/add', businessController.processUpdatePage);

// Routers for edit
router.get('/edit/:id', businessController.displayEditPage);
router.post('/edit/:id', businessController.processEditPage);

// Delete
router.get('/delete/:id', businessController.performDelete);

module.exports = router;