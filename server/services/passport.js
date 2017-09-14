const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const keys = require('../config/keys');
// User is the model Class used to create a new model instance
const User = mongoose.model('users');

// Generates token for identifying user, token stored with cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Pulls token from cookie to determine what user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
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
passport.use(new GoogleStrategy(googleOptions, async (accessToken, refreshToken, profile, done) => {
      const newUser = {
        googleId: profile.id,
        first_name: profile.name.givenName,
        last_name: profile.name.familyName,
        email: profile.emails[0].value
      };

      const existingUser = await User.findOne({ googleId: profile.id })

      if (existingUser) return done(null, existingUser);

      const user = await User.create(newUser); // creates new model instance of User and saves
      done(null, user);
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
