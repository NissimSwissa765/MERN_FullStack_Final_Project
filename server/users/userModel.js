const mongoose = require('mongoose');
let appSchema = mongoose.Schema;

let userSchema = new appSchema(
    {
        name : String,
        username : String,
        password : String,
    })

module.exports = mongoose.model('users',userSchema)