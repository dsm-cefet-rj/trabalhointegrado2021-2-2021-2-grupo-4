var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Activities = require('../models/activities')

router.use(bodyParser.json());

/* GET users listing. */
router.route('/')
.get( async (req, res, next) => {
  try{
    const activitiesBase = await Activities.find({}).maxTime(5000);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(activitiesBase);
  }catch(err){
    next(err);
  }
})
.post((req, res, next) => {

  Activities.create(req.body)
  .then((activity) => {
    console.log('Activity criada', activity)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(activity);
  }, (err) => next(err))
  .catch((err) => next(err))
})

router.route('/:id')
.get((req, res, next) => {
  Activities.findById(req.params.id)
  .then((resp) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err))

})
.delete((req, res, next) => {
  Activities.findByIdAndRemove(req.params.id)
  .then((resp) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(resp.id);
  }, (err) => next(err))
  .catch((err) => next(err))

})
.put((req, res, next) => {
  Activities.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((activity) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(activity);
  }, (err) => next(err))
  .catch((err) => next(err))
})

module.exports = router;
