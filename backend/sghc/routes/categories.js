var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Categories = require('../models/categories')
var authenticate = require('../authenticate'); 
const cors = require('./cors');

router.use(bodyParser.json());

/* GET users listing. */
router.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200) })
    .get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
        const categoriesBase = await Categories.find({}).lean().exec();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(categoriesBase);
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Categories.create(req.body)
        .then((category) => {
            console.log('Categoria criada', category)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(category);
        }, (err) => next(err))
        .catch((err) => next(err))
    })

module.exports = router;
