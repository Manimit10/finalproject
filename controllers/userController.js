const User = require('../models/User');

exports.login = (req, res) => {
  // res.send('login clicked');
  res.render('login', { page: null, menuId: null });
};

exports.logout = () => {};

exports.register = (req, res) => {
  console.log(req.body);
  res.render('register', { page: null, menuId: null });
};

exports.home = (req, res) => {
  res.render('home-guest', { page: 'Home', menuId: 'home' });
};

exports.blogGuest = (req, res) => {
  res.render('blog-guest.ejs', { page: 'null', menuId: 'blog' });
};
