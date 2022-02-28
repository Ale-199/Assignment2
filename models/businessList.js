// Author:Alejandro zhengzheng
//Student ID: 301083081
// Date:2022 - 02 -28
let mongoose = require('mongoose');

//create a model class
let businessListModel = mongoose.Schema({
        contactName: String,
        contactNumber: Number,
        emailAddress: String
    }, {
        collection: "businessList"
    }

);

module.exports = mongoose.model('businessList', businessListModel);