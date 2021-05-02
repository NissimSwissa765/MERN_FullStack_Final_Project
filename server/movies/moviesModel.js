const mongoose = require('mongoose');
let appSchema = mongoose.Schema;

let movieSchema = new appSchema(
    {
        name : String,
        premiered : String,
        genres : [String],
        image : String
    })

module.exports = mongoose.model('movies',movieSchema)