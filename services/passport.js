const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const db = require('../database/db');

// Generates token for identifying user, token stored with cookie
passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

// Pulls token from cookie to determine what user
passport.deserializeUser((id, done) => {
  db.query('SELECT * FROM users WHERE user_id = ($1)', [id])
    .then(user => {
      done(null, user);
    }).catch(err => console.log('error deserializing user', err));
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
      const values = [
        profile.id,
        profile.name.givenName,
        profile.name.familyName,
        profile.emails[0].value
      ];

      db.query('SELECT * FROM users WHERE google_id = ($1)', [profile.id], (err, existingUser) => {
        if (err) console.log('Error querying users table', err);
        if (existingUser.rows[0]) {
          done(null, existingUser.rows[0]);
        } else {
          db.query('INSERT INTO users("google_id", "first_name", "last_name", "email") VALUES ($1, $2, $3, $4) RETURNING user_id', values, (err, user) => {
            if (err) console.error('Error inserting record into users table', err);
            done(null, user.rows[0]);
          })
        }
      })
    }
  )
);
