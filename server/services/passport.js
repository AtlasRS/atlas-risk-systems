const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const keys = require('../config/keys');
const db = require('../database/db');

// Salt factor for hashing password
const SALT_WORK_FACTOR = 10;

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
      console.log('PROFILE', profile);
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
            if (err) console.error('Error inserting record into database', err);
            done(null, user.rows[0]);
          })
        }
      })
    }
  )
);

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  (email, password, done) => {

    const SALT = bcrypt.genSalt(SALT_WORK_FACTOR, (err, result) => {
      if (err) console.error('Error generating salt', err);
      return result;
    });

    const hashedpwd = bcrypt.hash(password, SALT, (err, result) => {
      if (err) console.error('Error hashing data', err);
      return result;
    });

    // const existingHash = db.query('SELECT ($1) FROM users WHERE email = ($2)', [HASH, email], (err, existingHash) => {
    //   if (err) console.error('Error querying users table', err);
    //   return existingHash;
    // });
    //
    // const compare = bcrypt.compare(HASH, existingHash, (err, result) => {
    //   if (err) console.error('Error comparing data', err);
    //   return result;
    // });

    if (compare === true) {}

    const values = [
      req.body.first_name,
      req.body.last_name,
      email,
      hashedpwd
    ];

    db.query('SELECT * FROM users WHERE email = ($1) AND password = $(2)', [email, hshedpwd], (err, existingUser) => {
      if (err) console.error('Error querying users table', err);
      if (existingUser.rows[0]) {
        done(null, existingUser.rows[0]);
      } else {
        db.query('INSERT INTO users("first_name", "last_name", "email", "password") VALUES ($1, $2, $3, $4) RETURNING user_id', values, (err, user) => {
          if (err) console.error('Error inserting record into database', err);
          done(null, user.rows[0]);
        })
      }
    })
  }
));
