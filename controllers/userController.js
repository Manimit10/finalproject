exports.login = (req, res) => {
  // res.send('login clicked');
  res.render('login', { page: null, menuId: null });
};

exports.logout = () => {};

exports.register = (req, res) => {
  res.render('register', { page: null, menuId: null });
};

exports.home = (req, res) => {
  res.render('home-guest', { page: 'Home', menuId: 'home' });
};
