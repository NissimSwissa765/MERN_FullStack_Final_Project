const mongoose = require('mongoose');

let appSchema = mongoose.Schema;

let memberSchema = new appSchema(
    {
        name : String,
        email : String,
        city : String

    })
    
module.exports = mongoose.model('members', memberSchema);