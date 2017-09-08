const passport = require('passport');

module.exports = app => {
  // Google authentication
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  // Authorized redirect route specified in Google credentials
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/assets'); // redirects back to the user's dashboard
    }
  );

  // Local authentication
  app.get('/auth/local',
    passport.authenticate('local', {
      successRedirect: '/assets',
      failureRedirect: '/auth/login',
      failureFlash: true
    })
  );

  app.get('/api/logout', (req, res) => {
    // logout is automatically attached to req object via passport
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
}
