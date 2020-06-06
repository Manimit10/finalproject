var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { page: 'Home', menuId: 'home' });
});

router.get('/blog', function (req, res, next) {
  res.render('blog', { title: 'blog' });
});
router.get('/therapists', function (req, res, next) {
  res.render('therapists', { page: 'Our Therapists', menuId: 'therapists' });
});

module.exports = router;
