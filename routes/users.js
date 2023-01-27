var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:userid', function(req, res, next) {
  res.send(`Request with UserId: ${req.params.userid}`);
});

router.get('/name/:name', function(req, res, next) {
  res.send(`Request with Name: ${req.params.name}`);
});

module.exports = router;
