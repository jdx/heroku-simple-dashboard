var express = require('express');
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')
var app     = express.Router();
var request = require('request');

app.use(cookieParser('your cookie secret'));
app.use(cookieSession({
  secret: 'your session secret',
  cookie: {
    path    : '/',
    signed  : true,
    httpOnly: true,
    maxAge  : null
  }
}));

var bouncer = require('heroku-bouncer')({
  herokuOAuthID      : process.env.HEROKU_CLIENT_ID,
  herokuOAuthSecret  : process.env.HEROKU_CLIENT_SECRET,
  herokuBouncerSecret: 'bouncer-secret'
});

app.use(bouncer.middleware);
app.use(bouncer.router);

app.get('/heroku/apps', function(req, res) {
  request.get({
    url: 'https://api.heroku.com/apps',
    json: true,
    headers: {
      authorization: 'Bearer ' + req['heroku-bouncer'].token,
      accept: 'application/vnd.heroku+json; version=3'
    }
  }, function (err, _, apps) {
    res.json(apps);
  })
});

module.exports = app
