const mongoose = require('mongoose');
const User = mongoose.model('users');

exports.getUser = (req, res, next) => {
  console.log(req.body);
  User.findOneById(req.user.id, (err, user) => {
    if (err) return next(err);
    if (user) return res.status(200).json(user);
  });
}
