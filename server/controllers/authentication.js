const mongoose = require('mongoose');
const User = mongoose.model('users');
const Token = mongoose.model('tokens');
const jwt = require('jwt-simple');
const keys = require('../config/keys');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.jwtKey);
}

exports.login = (req, res, next) => {
  res.send({ user: req.user, token: tokenForUser(req.user), entities: req.entities, assets: req.assets });
}


exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) return res.status(422).send({ error: 'You must provide email and password' });

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) return next(err);
    if (existingUser) return res.status(400).send({ msg: 'The email address you have entered is already associated with another account.' });

    User.create(req.body, (err, user) => {
      if (err) return res.status(500).send({ msg: err.message });
      // Create a verification token for this user
      const token = new Token({ _user: user._id, token: crypto.randomBytes(16).toString('hex') });
      // Save the verification token
      token.save(err => {
        if (err) { return res.status(500).send({ msg: err.message }); }
        // Send the email
        const transporter = nodemailer.createTransport({ service: 'Sendgrid', auth: { user: keys.sendGridUsername, pass: keys.sendGridPassword } });
        const mailOptions = { from: 'no-reply@atlasrs.com', to: user.email, subject: 'Account Verification', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirm\/account\/' + token.token + '.\n' };
        transporter.sendMail(mailOptions, err => {
            if (err) { return res.status(500).send({ msg: err.message }); }
            res.status(200).send({ msg: 'A verification email has been sent to ' + user.email + '.' });
        });
      });
      // return res.status(200).json({ token: tokenForUser(user) });
    });
  });

}
