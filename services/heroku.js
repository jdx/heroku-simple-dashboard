var request = require('request')

function herokuHeaders (req) {
  return {
    authorization: 'Bearer ' + req['heroku-bouncer'].token,
    accept: 'application/vnd.heroku+json; version=3'
  }
}

exports.list = function(req, res) {
  request.get({
    url: 'https://api.heroku.com/apps',
    json: true,
    headers: herokuHeaders(req)
  }, function (err, _, apps) {
    res.json(apps);
  })
};

exports.create = function(req, res) {
  request.post({
    url: 'https://api.heroku.com/apps',
    body: {name: req.body.name},
    json: true,
    headers: herokuHeaders(req)
  }, function (err, _, app) {
    res.json(app)
  })
}
