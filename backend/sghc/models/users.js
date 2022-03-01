const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize =  require('normalize-mongoose');

var passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    
    admin: {
        type: Boolean,
        default: false
    }
})

User.plugin(passportLocalMongoose);
activitySchema.plugin(normalize);

var Users = mongoose.model('User', User);

module.exports = Users;