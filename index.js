const express = require('express');
const db = require('./database/db');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

db.getClient();

const app = express();

app.use(cors());

app.use(cookieSession({
    // Cookie set to last for 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

// How assets will be served in production
if (process.env.NODE_ENV === 'production') {
  // Express will serve production assets
  app.use(express.static('client/build'));
  // Express will serve the index.html file if it doesn't recongize the route
  const path = require('path');
  app.get('*', (res, req) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
