const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize =  require('normalize-mongoose');

const activitySchema = new Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    category: {
        type: Number,
        required: true
    },
    validated: {
        type: Boolean,
        required: true
    }
})

activitySchema.plugin(normalize);

var Activities = mongoose.model('Activities', activitySchema)

module.exports = Activities;