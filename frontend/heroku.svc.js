angular.module('app')
.service('HerokuSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/heroku/apps')
  }

  this.create = function (app) {
    return $http.post('/api/heroku/apps', app)
  }
})
