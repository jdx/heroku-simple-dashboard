module.exports = require('heroku-bouncer')({
  herokuOAuthID      : process.env.HEROKU_CLIENT_ID,
  herokuOAuthSecret  : process.env.HEROKU_CLIENT_SECRET,
  herokuBouncerSecret: 'bouncer-secret'
});
