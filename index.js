const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./server/config/keys');
require('./server/models/User');
require('./server/models/Asset');
require('./server/models/Entity');
require('./server/models/VerificationToken');
require('./server/services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(passport.initialize());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./server/routes/authRoutes')(app);
require('./server/routes/entityRoutes')(app);
require('./server/routes/assetRoutes')(app);
require('./server/routes/userRoutes')(app);

// How assets will be served in production
if (process.env.NODE_ENV === 'production') {
  // Express will serve production assets
  app.use(express.static('client/build'));
  // Express will serve the index.html file if it doesn't recongize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
