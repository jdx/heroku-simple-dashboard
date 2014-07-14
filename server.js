var express = require('express')
var logger  = require('morgan')
var app = express()
app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.static('assets'))
app.use('/api', require('./heroku'))

var port = process.env.PORT || 3000
app.listen(port)
