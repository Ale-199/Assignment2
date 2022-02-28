// Author:Alejandro zhengzheng
//Student ID: 301083081
// Date:2022 - 02 -28

let DB_CONNECTION = "mongodb+srv://alejandro:1niVQhRy7CUK0tg8@cluster0.hjrjg.mongodb.net/lab2"

// Database Setup
let mongoose = require('mongoose');

module.exports = function() {

    // Connect to the DB
    mongoose.connect(DB_CONNECTION);

    let mongoDB = mongoose.connection;

    mongoDB.on('error', console.error.bind(console, 'Connection Error: '));
    mongoDB.once('open', () => {
        console.log('Connected to MongoDB...');
    })

    return mongoDB;
}