const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const db = require('../database/db');

passport.serializeUser((user, done) => {
  console.log('SERIALIZE USER', user.user_id);
  done(null, user.user_id);
});

passport.deserializeUser((id, done) => {
  db.query('SELECT user_id FROM users WHERE user_id = ($1)', [id])
    .then(user => {
      console.log('DESERIALIZED USER', user);
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

      console.log('profile id', profile.id);

      db.query('SELECT * FROM users WHERE google_id = ($1)', [profile.id], (err, existingUser) => {
        if (err) console.log('Error querying users table', err);
        if (existingUser.rows[0]) {
          console.log('existing user', existingUser.rows[0]);
          done(null, existingUser.rows[0]);
        } else {
          db.query('INSERT INTO users("google_id", "first_name", "last_name", "email") VALUES ($1, $2, $3, $4)', values, (err, user) => {
            if (err) console.error('Error inserting record into users table', err);
            console.log('NEW USER', user.rows[0]);
            done(null, user.rows[0]);
          })
        }
      })
    }
  )
);
