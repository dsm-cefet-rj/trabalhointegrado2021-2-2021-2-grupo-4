var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Categories = require('../models/categories')

router.use(bodyParser.json());

/* GET users listing. */
router.route('/')
.get( async (req, res, next) => {
    const categoriesBase = await Categories.find({}).lean().exec();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(categoriesBase);
})

module.exports = router;
