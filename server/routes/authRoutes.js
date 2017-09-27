const passport = require('passport');
const AuthenticationCtrl = require('../controllers/authentication');
const EntityCtrl = require('../controllers/entity');
const AssetsCtrl = require('../controllers/asset');
const UserCtrl = require('../controllers/user');

// Passport authentication strategies as helpers
const requireAuth = passport.authenticate('jwt', { session: false });
const googleAuth = passport.authenticate('google', { session: false, scope: ['profile', 'email'] });
const googleAuthCallback = passport.authenticate('google', { session: false });
const linkedInAuth = passport.authenticate('linkedin', { session: false, scope: ['r_basicprofile', 'r_emailaddress'] });
const linkedInAuthCallback = passport.authenticate('linkedin', { session: false });
const localAuth = passport.authenticate('local', { session: false });

module.exports = app => {
  // #### Google authentication ####
  app.get('/auth/google', googleAuth);
  // Authorized redirect route specified in Google credentials
  app.get('/auth/google/callback', googleAuthCallback, AuthenticationCtrl.login);

  // #### LinkedIn authentication ####
  app.get('/auth/linkedin', linkedInAuth);
  // Authorized redirect route specified in LinkedIn credentials
  app.get('/auth/linkedin/callback', linkedInAuthCallback, AuthenticationCtrl.login);
  // Get user
  app.get('/api/user', requireAuth, EntityCtrl.getEntities, (req, res) => {
    console.log(req.entities);
    res.send({ user: req.user, entities: req.entities });
  });

  // #### Local Authntication ####
  app.post('/api/login', localAuth, EntityCtrl.getEntities, AssetsCtrl.getAssets, AuthenticationCtrl.login);
  app.post('/api/signup', AuthenticationCtrl.signup);

  // ### Email Confirmation & Resend ###
  app.post('api/confirmation', UserCtrl.confirmation);
  app.post('api/resend', UserCtrl.resendToken);

  app.get('/api/logout', (req, res) => {
    req.logout(); // logout is automatically attached to req object via passport
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}
