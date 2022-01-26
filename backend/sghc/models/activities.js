const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    validate: {
        type: Boolean,
        required: true
    }
})

module.exports = activitySchema;