let BusinessList = require('../models/businessList');

exports.businessContactList = function(req, res, next) {
    //invoke the BusinessList from the models folder
    BusinessList.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render(
                //businessContactList is in the businessContact folder 
                'businessList/businessContactList', {
                    title: 'Buinsess contact List',
                    ContactList: contactList //the name of the object inside the ejs, the value that i want to pass is contactList
                }
            );
        }
    });
}

module.exports.displayUpdatePage = (req, res, next) => {

    let newItem = BusinessList();

    res.render('businessList/update', {
        title: 'Update a new Item',
        item: newItem
    })
}

module.exports.processUpdatePage = (req, res, next) => {

    let newItem = BusinessList({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress
    });

    BusinessList.create(newItem, (err, item) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {

            console.log(item);
            res.redirect('/businessList/businessContactList');
        }
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    BusinessList.findById(id, (err, itemToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //show the edit view
            res.render('businessList/update', {
                title: 'Edit the contact list',
                item: itemToEdit
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = BusinessList({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress
    });

    // console.log(updatedItem);

    BusinessList.updateOne({ _id: id }, updatedItem, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/businessList/businessContactList');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    BusinessList.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh the book list
            res.redirect('/businessList/businessContactList');
        }
    });
}