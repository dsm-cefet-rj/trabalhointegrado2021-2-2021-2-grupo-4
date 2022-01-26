var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

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
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(activities);
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

module.exports = router;
