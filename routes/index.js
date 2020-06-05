var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blog', function (req, res, next) {
  res.render('blog', { title: 'blog' });
});
router.get('/therapists', function (req, res, next) {
  res.render('therapists', { title: 'Therapists' });
});
router.get('/blog', function (req, res, next) {
  res.render('blog', { title: 'blog' });
});

module.exports = router;
