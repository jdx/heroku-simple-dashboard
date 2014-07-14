var express = require('express');
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser')
var app     = express.Router();

app.use(bodyParser.json())
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

var herokuSvc = require('./services/heroku')
app.get('/heroku/apps', herokuSvc.list)
app.post('/heroku/apps', herokuSvc.create)

module.exports = app
