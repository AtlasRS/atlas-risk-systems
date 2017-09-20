const mongoose = require('mongoose');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const AssetCtrl = require('../controllers/asset');

const Asset = mongoose.model('assets');

module.exports = app => {
  app.get('/api/asset/:id', requireAuth, AssetCtrl.getAsset);
  app.get('/api/assets/:id', requireAuth, AssetCtrl.getAssets);
  app.post('/api/asset', requireAuth, AssetCtrl.postAsset);
  app.put('/api/asset/:id', requireAuth, AssetCtrl.updateAsset);
  app.delete('/api/asset/:id', requireAuth, AssetCtrl.deleteAsset);
};
