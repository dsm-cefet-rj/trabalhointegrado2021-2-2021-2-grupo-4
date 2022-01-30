var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Categories = require('../models/categories')

router.use(bodyParser.json());

/* GET users listing. */
router.route('/')
.get( async (req, res, next) => {
  try{
    const categoriesBase = await Categories.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(categoriesBase);
  }catch(err){
    next(err);
  }
})

module.exports = router;
