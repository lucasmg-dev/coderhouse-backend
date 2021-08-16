var express = require('express');
var router = express.Router();

router.use(express.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/', function(req, res, next) {
  console.log('body',{...req.body})
  //res.send('respond with a product POST');
  res.redirect('/products')
});

router.put('/', function(req, res, next) {
  res.send('respond with a product PUT');
});

router.delete('/', function(req, res, next) {
  res.send('respond with a product DELETE');
});

module.exports = router;
