const mongoose = require('mongoose');
const User = mongoose.model('users');
const Token = mongoose.model('tokens');
const keys = require('../config/keys');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.getUser = (req, res, next) => {
  console.log(req.body);
  User.findOneById(req.user.id, (err, user) => {
    if (err) return next(err);
    if (user) return res.status(200).json(user);
  });
}

exports.confirmation = (req, res, next) => {
  // Find a matching token
  Token.findOne({ token: req.body.token }, (err, token) => {
    if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });

    // If we found a token, find a matching user
    User.findOne({ _id: token._user }, (err, user) => {
      if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
      if (user.isVerified) return res.status(400).send({ type: 'already-verified', msg: 'This user has already been verified.' });

      // Verify and save the user
      user.isVerified = true;
      user.save(err => {
          if (err) { return res.status(500).send({ msg: err.message }); }
          res.status(200).send("The account has been verified. Please log in.");
      });
    });
  });
};

exports.resendToken = (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
    if (user.isVerified) return res.status(400).send({ msg: 'This account has already been verified. Please log in.' });

    // Create a verification token, save it, and send email
    const token = new Token({ _user: user._id, token: crypto.randomBytes(16).toString('hex') });

    // Save the token
    token.save(err => {
      if (err) { return res.status(500).send({ msg: err.message }); }

      // Send the email
      const transporter = nodemailer.createTransport({ service: 'Sendgrid', auth: { user: keys.sendGridUsername, pass: keys.sendGridKey } });
      const mailOptions = { from: 'no-reply@atlasrs.com', to: user.email, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n' };
      transporter.sendMail(mailOptions, function (err) {
          if (err) { return res.status(500).send({ msg: err.message }); }
          res.status(200).send('A verification email has been sent to ' + user.email + '.');
      });
    });
  });
};
