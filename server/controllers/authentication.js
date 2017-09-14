const mongoose = require('mongoose');
const User = mongoose.model('users');
const jwt = require('jwt-simple');
const keys = require('../config/keys');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.jwtKey);
}

exports.login = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) return res.status(422).send({ error: 'You must provide email and password' });

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) return next(err);
    if (existingUser) return res.status(422).send({ error: 'Email arleady exists' });

    User.create(req.body, (err, user) => {
      if (err) return res.status(418).send({ error: err });
      return res.status(200).json({ token: tokenForUser(user) });
    });
  });

}
