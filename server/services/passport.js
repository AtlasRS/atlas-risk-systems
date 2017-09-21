const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const keys = require('../config/keys');
// User is the model Class used to create a new model instance
const User = mongoose.model('users');

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: keys.jwtKey
};
// Tell passport to use Jwt Strategy
passport.use(new JwtStrategy(jwtOptions, (payload, done)  => {
  User.findById(payload.sub, (err, user) => {
      if (err) return done(err, false);
      if (user) return done(null, user)
      return done(null, false);
    });
  })
);

// Setup options for Google Strategy
const googleOptions = {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
}

// Pass OAuth Client ID and Client Secret to GoogleStrategy
passport.use(new GoogleStrategy(googleOptions, (accessToken, refreshToken, profile, done) => {
  console.log("HERE IN GOOGLE STRATEGY");
      const newUser = {
        googleId: profile.id,
        first_name: profile.name.givenName,
        last_name: profile.name.familyName,
        email: profile.emails[0].value
      };

      User.findOne({ googleId: profile.id }, (err, existingUser) => {
        if (existingUser) return done(null, existingUser);
        User.create(newUser, (err, user) => { // creates new model instance of User and saves
          return done(null, user);
        });
      })
    }
  )
);

// Setup options for LinkedIn Strategy
const linkedInOptions = {
  consumerKey: keys.linkedInClientID,
  consumerSecret: keys.linkedInClientSecret,
  callbackURL: '/auth/linkedin/callback',
  proxy: true
}

// Pass OAuth Client ID and Client Secret to GoogleStrategy
passport.use(new LinkedInStrategy(linkedInOptions, (token, tokenSecret, profile, done) => {
      console.log("INSIDE LINKED IN STRATEGY");
      const newUser = {
        linkedinId: profile.id,
        // first_name: profile.name.givenName,
        // last_name: profile.name.familyName,
        // email: profile.emails[0].value
      };

      User.findOne({ linkedinId: profile.id }, (err, existingUser) => {
        if (existingUser) return done(null, existingUser);
        User.create(newUser, (err, user) => { // creates new model instance of User and saves
          return done(null, user);
        });
      })
    }
  )
);

// Setup options for Local Strategy
const localOptions = {
  usernameField: 'email'
}

passport.use(new LocalStrategy(localOptions, function(email, password, done) {
  User.findOne({ email: email }, function(err, user) {
    if (err) return done(err);
    if (!user) return done(null, false);
    // compare passwords - is 'password' equal to user.password
    user.comparePassword(password, function(err, isMatch) {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    });
  });
}))
