const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize =  require('normalize-mongoose');

const offerSchema = new Schema({

    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Number,
        required: true
    },
})

offerSchema.plugin(normalize);

var Offers = mongoose.model('Offers', offerSchema)

module.exports = Offers;