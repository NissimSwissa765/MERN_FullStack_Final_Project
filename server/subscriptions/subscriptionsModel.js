const mongoose = require('mongoose');

let appSchema = mongoose.Schema;

let subscriptionsSchema = new appSchema(
    {
        member_id : String,
        movie_id : String,
        date : String
    })

module.exports = mongoose.model('subscriptions',subscriptionsSchema);