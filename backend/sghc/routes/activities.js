var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json([
    {
      "type": "Iniciação científica",
      "description": "sfsaf",
      "hours": "20",
      "id": 1,
      "category": 1,
      "validate": false
    }
  ]);
});

module.exports = router;
