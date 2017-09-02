const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const db = require('../database/db');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.query(`SELECT googleID FROM users WHERE googleID = ${id}`)
    .then(user => {
      done(null, user);
    });
});

// Pass OAuth Client ID and Client Secret to GoogleStrategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // db.query('CREATE TABLE IF NOT EXISTS users("_id" serial primary key, "googleID" varchar NOT NULL);')
      //   .then(err, result) => {
      //     if (err) console.error('query unsuccessful', err);
      //     console.log("CREATE TABLE");
      //   });

      db.query(`SELECT googleID FROM users WHERE googleID = ${profile.id}`)
        .then(existingUser => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            db.query('INSERT INTO users("googleID") VALUES ($1)', [profile.id])
              .then(user => done(null, user));
          }
        });
    }
  )
);
