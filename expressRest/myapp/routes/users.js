var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource GET');
});

router.post('/', function(req, res, next) {
  res.send('respond with a resource POST');
});

router.put('/', function(req, res, next) {
  res.send('respond with a resource PUT');
});

router.delete('/', function(req, res, next) {
  res.send('respond with a resource DELETE');
});

module.exports = router;
