angular.module('app')
.controller('AppCtrl', function ($scope, HerokuSvc) {
  function reload () {
    HerokuSvc.fetch().success(function (apps) {
      $scope.apps = apps
    })
  }
  reload()

  $scope.create = function (app) {
    HerokuSvc.create(app).success(function () {
      $scope.creatingApp = false
      reload()
    })
  }
})

