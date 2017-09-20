const mongoose = require('mongoose');
const UserCtrl = require('../controllers/user');

const User = mongoose.model('users');

module.exports = app => {
  app.get('/api/user', UserCtrl.getUser);
};
