var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Offers = require('../models/offers')
var authenticate = require('../authenticate'); 
const cors = require('./cors');

router.use(bodyParser.json());

/* GET users listing. */
router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200) })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  console.log(req.user);
  try{
    const offersBase = await Offers.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(offersBase);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
})
.post(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
  Offers.create(req.body)
  .then((offer) => {
    console.log('Offer criada', offer)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(offer);
  }, (err) => next(err))
  .catch((err) => next(err))
})

router.route('/:id')
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    const resp = await Offers.findById(req.params.id);
    if(resp != null){
      res.statusCode = 200;
      res.json(resp);
    }else{
      err = {};
      res.statusCode = 404;
      res.json(err);
    }
  }catch(errParams){
    console.log(errParams)
    res.statusCode = 404;
    res.json({});
  }
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Offers.findByIdAndRemove(req.params.id)
  .then((resp) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(resp.id);
  }, (err) => next(err))
  .catch((err) => next(err))

})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Offers.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((offer) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(offer);
  }, (err) => next(err))
  .catch((err) => next(err))
})

module.exports = router;
