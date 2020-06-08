var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('home-guest', { page: 'Home', menuId: 'home' });
// });
router.get('/', userController.home);
router.get('/register', userController.register);
router.get('/login', userController.login);

router.get('/blog', function (req, res, next) {
  res.render('blog', { title: 'blog', menuId: 'blog' });
});
router.get('/therapists', function (req, res, next) {
  res.render('therapists', { page: 'Our Therapists', menuId: 'therapists' });
});

module.exports = router;
