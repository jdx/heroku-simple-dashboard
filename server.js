var express = require('express')
var logger  = require('morgan')
var bouncer = require('./heroku_bouncer')
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser')

var app = express()

app.use(logger('dev'))

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

app.use(bouncer.middleware);
app.use(bouncer.router);

app.use(express.static('public'))
app.use(express.static('assets'))
app.use('/api', require('./api'))

app.get('/auth/heroku', function (req, res) {
  res.redirect('/')
})

var port = process.env.PORT || 3000
app.listen(port)
