const { Pool } = require('pg');
const postgresURI = require('../config/keys').postgresURI;

const pool = new Pool({
  connectionString: postgresURI,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// pool.on('error', function (err, client) {
//   console.error('idle client error', err.message, err.stack);
// });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
  getClient: () => {
    pool.connect((err, client, done) => {
      if (err) {
        return console.error('Error acquiring client', err.stack)
      }
      pool.query('SELECT NOW() AS "theTime"', (err, res) => {
        console.log(res.rows[0].theTime);
      });
    })
  }
}
