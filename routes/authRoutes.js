const passport = require('passport');

module.exports = app => {
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    console.log('api logout', req.user);
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    console.log('api current_user', req.user);
    res.send(req.user);
  })
}
