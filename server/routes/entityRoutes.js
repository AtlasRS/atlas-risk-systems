const mongoose = require('mongoose');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const EntityCtrl = require('../controllers/entity');

const Entity = mongoose.model('entities');

module.exports = app => {
  app.get('/api/entity/:id', requireAuth, EntityCtrl.getEntity);
  app.get('/api/entities/:id', requireAuth, EntityCtrl.getEntities);
  app.post('/api/entity', requireAuth, EntityCtrl.postEntity);
  app.put('/api/entity/:id', requireAuth, EntityCtrl.updateEntity);
  app.delete('/api/entity/:id', requireAuth, EntityCtrl.deleteEntity);
};
