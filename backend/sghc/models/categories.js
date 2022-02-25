const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize =  require('normalize-mongoose');

const categorySchema = new Schema({
    name: {
        type: String
    },
    subcategories: {
        type: Array
    },
    categoryCode: {
        type: Number
    }
})

categorySchema.plugin(normalize);

var Categories = mongoose.model('Categories', categorySchema)

module.exports = Categories;