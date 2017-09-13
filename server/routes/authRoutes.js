const passport = require('passport');
const Authentication = require('../controllers/authentication');
const passportService = require('../routes/authRoutes');

module.exports = app => {
  app.get('/',
    passport.authenticate('jwt', {
      session: false
    }),
    (req, res) => {
      res.send({ hi: 'there' });
    }
  );
  // Google authentication
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  // Authorized redirect route specified in Google credentials
  app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/assets'); // redirects back to the user's dashboard
    }
  );

  app.post('/api/login',
    passport.authenticate('local', {
      session: false
    }),
    Authentication.login
  );

  app.post('/api/signup', Authentication.signup);

  app.get('/api/logout', (req, res) => {
    // logout is automatically attached to req object via passport
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
}
