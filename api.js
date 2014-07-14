'use strict';
var router = require('express').Router()
var herokuSvc = require('./services/heroku')

router.get('/heroku/apps', herokuSvc.list)
router.post('/heroku/apps', herokuSvc.create)

module.exports = router
