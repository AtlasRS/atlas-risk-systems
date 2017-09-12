const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const keys = require('../config/keys');

// User is the model Class used to create a new model instance
const User = mongoose.model('users');

// Salt factor for hashing password
const SALT_WORK_FACTOR = 10;

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

// Pass OAuth Client ID and Client Secret to GoogleStrategy
passport.use(new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })

      if (existingUser) return done(null, existingUser);

      const user = await new User({ googleId: profile.id }).save(); // creates new model instance of User
      done(null, user);
    }
  )
);

passport.use(new LocalStrategy({
    usernameField: 'email',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  (email, password, done) => {
    console.log('EMAIL', email);
    console.log('PASSWORD', password);

    // const SALT = bcrypt.genSalt(SALT_WORK_FACTOR, (err, result) => {
    //   if (err) console.error('Error generating salt', err);
    //   return result;
    // });

    const hashedpwd = bcrypt.hash(password, bcrypt.genSaltSync(SALT_WORK_FACTOR), (err, result) => {
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

// #### Postgres Setup ####

// passport.use(new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: '/auth/google/callback',
//       proxy: true
//     },
//     (accessToken, refreshToken, profile, done) => {
//       const values = [
//         profile.id,
//         profile.name.givenName,
//         profile.name.familyName,
//         profile.emails[0].value
//       ];
//
//       db.query('SELECT * FROM users WHERE google_id = ($1)', [profile.id], (err, existingUser) => {
//         if (err) console.log('Error querying users table', err);
//         if (existingUser.rows[0]) {
//           done(null, existingUser.rows[0]);
//         } else {
//           db.query('INSERT INTO users("google_id", "first_name", "last_name", "email") VALUES ($1, $2, $3, $4) RETURNING user_id', values, (err, user) => {
//             if (err) console.error('Error inserting record into database', err);
//             done(null, user.rows[0]);
//           })
//         }
//       })
//     }
//   )
// );
