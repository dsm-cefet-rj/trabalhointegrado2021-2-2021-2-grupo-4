var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Activities = require('../models/activities')

router.use(bodyParser.json());

let activities = [
  {
    "type": "Iniciação científica",
    "description": "sfsaf",
    "hours": "20",
    "id": 1,
    "category": 1,
    "validate": false
  },{
    "type": "Cursos de língua estrangeira",
    "description": "espanhol",
    "hours": "60",
    "id": 2,
    "category": 2,
    "validate": false
  }
];

/* GET users listing. */
router.route('/')
.get((req, res, next) => {

  Activities.find({})
    .then((activitiesBase) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(activitiesBase);
    }, (err) => next(err))
    .catch((err) => next(err))
})
.post((req, res, next) => {
  let proxId = 1 + activities.map(p => p.id).reduce((x,y) => Math.max(x,y));
  let activity = {...req.body, id: proxId }
  activities.push(activity);

  activities.push(req.body);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(activity);
})

router.route('/:id')
.delete((req, res, next) => {
  activities = activities.filter(function(value, index, arr){
    return value.id != req.params.id;
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.params.id);
})
.put((req, res, next) => {
  let index = activities.map(p => p.id).indexOf(req.params.id);
  activities.splice(index, 1, req.body);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
})

module.exports = router;
