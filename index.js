const express = require('express');
const db = require('./server/database/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./server/config/keys');
require('./server/services/passport');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieSession({
    // Cookie set to last for 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./server/routes/authRoutes')(app);

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
