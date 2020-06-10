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

router.get('/blog-guest', userController.blogGuest);

router.get('/blog', function (req, res, next) {
  res.render('blog', { page: 'blog', menuId: 'blog' });
});
router.get('/therapists', function (req, res, next) {
  res.render('therapists', { page: 'Our Therapists', menuId: 'therapists' });
});

router.post('/create-user', (req, res, next) => {
  console.log(req.body.firstname);
  console.log(req.body.lastname);
  console.log(req.body.email);
  console.log(req.body.password);
  res.send('you added to the website');
});

module.exports = router;
