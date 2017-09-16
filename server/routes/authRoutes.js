const passport = require('passport');
const Authentication = require('../controllers/authentication');
const passportService = require('../routes/authRoutes');

// Passport authentication strategies as helpers
const requireAuth = passport.authenticate('jwt', { session: false });
const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
const googleAuthCallback = passport.authenticate('google');
const loginAuth = passport.authenticate('local', { session: false });

module.exports = app => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'there' });
  });

  // #### Google authentication ####
  app.get('/auth/google', googleAuth);
  // Authorized redirect route specified in Google credentials
  app.get('/auth/google/callback', googleAuthCallback, (req, res) => {
    res.redirect('/assets'); // redirects back to the user's dashboard
  });

  // #### Local Authntication ####
  app.post('/api/login', loginAuth, Authentication.login);
  app.post('/api/signup', Authentication.signup);

  app.get('/api/logout', (req, res) => {
    req.logout(); // logout is automatically attached to req object via passport
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}
