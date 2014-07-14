$(function () {
  $('.create-app-link').click(function () {
    $('.modal-overlay').addClass('showing')
  })
  $('.modal-overlay').click(function () {
    $('.modal-overlay').removeClass('showing')
  })
  $('.modal-content').click(function (e) {
    e.stopPropagation()
  })
})

angular.module('app', [])
.controller('AppCtrl', function ($scope, HerokuSvc) {
  HerokuSvc.fetch().success(function (apps) {
    $scope.apps = apps
  })
})
.service('HerokuSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/heroku/apps')
  }
})
