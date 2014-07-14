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
.controller('AppCtrl', function ($scope) {
  $scope.apps = [
    {
    archived_at: null,
    buildpack_provided_description: null,
    created_at: "2014-07-14T05:29:05Z",
    git_url: "git@heroku.com:c3po-cloud.git",
    id: "e9045902-ceb0-4d11-9049-9d0b66f03564",
    maintenance: false,
    name: "c3po-cloud",
    owner: {
      email: "mail+web+interview@maximilian.io",
      id: "12a5e5ea-9bad-47a4-9922-5df8db75feb8"
    },
    region: {
      id: "59accabd-516d-4f0e-83e6-6e3757701145",
      name: "us"
    },
    released_at: "2014-07-14T05:29:06Z",
    repo_size: null,
    slug_size: null,
    stack: {
      id: "7e04461d-ec81-4bdd-8b37-b69b320a9f83",
      name: "cedar"
    },
    updated_at: "2014-07-14T05:29:06Z",
    web_url: "http://c3po-cloud.herokuapp.com/"
  },
  {
    archived_at: null,
    buildpack_provided_description: null,
    created_at: "2014-07-14T05:29:22Z",
    git_url: "git@heroku.com:hal-9000-cloud.git",
    id: "aac6a0e9-bae1-48d6-92b1-83e2c31ff1a3",
    maintenance: false,
    name: "hal-9000-cloud",
    owner: {
      email: "mail+web+interview@maximilian.io",
      id: "12a5e5ea-9bad-47a4-9922-5df8db75feb8"
    },
    region: {
      id: "59accabd-516d-4f0e-83e6-6e3757701145",
      name: "us"
    },
    released_at: "2014-07-14T05:29:23Z",
    repo_size: null,
    slug_size: null,
    stack: {
      id: "7e04461d-ec81-4bdd-8b37-b69b320a9f83",
      name: "cedar"
    },
    updated_at: "2014-07-14T05:29:23Z",
    web_url: "http://hal-9000-cloud.herokuapp.com/"
  },
  {
    archived_at: null,
    buildpack_provided_description: null,
    created_at: "2014-07-14T05:29:35Z",
    git_url: "git@heroku.com:r2d2-cloud.git",
    id: "919b9b99-3703-4f9f-94a9-b49127321e58",
    maintenance: false,
    name: "r2d2-cloud",
    owner: {
      email: "mail+web+interview@maximilian.io",
      id: "12a5e5ea-9bad-47a4-9922-5df8db75feb8"
    },
    region: {
      id: "59accabd-516d-4f0e-83e6-6e3757701145",
      name: "us"
    },
    released_at: "2014-07-14T05:29:37Z",
    repo_size: null,
    slug_size: null,
    stack: {
      id: "7e04461d-ec81-4bdd-8b37-b69b320a9f83",
      name: "cedar"
    },
    updated_at: "2014-07-14T05:29:37Z",
    web_url: "http://r2d2-cloud.herokuapp.com/"
  },
  {
    archived_at: null,
    buildpack_provided_description: null,
    created_at: "2014-07-14T05:29:47Z",
    git_url: "git@heroku.com:t-1000-cloud.git",
    id: "c996d82e-8a62-4435-973c-a17865fb00e7",
    maintenance: false,
    name: "t-1000-cloud",
    owner: {
      email: "mail+web+interview@maximilian.io",
      id: "12a5e5ea-9bad-47a4-9922-5df8db75feb8"
    },
    region: {
      id: "59accabd-516d-4f0e-83e6-6e3757701145",
      name: "us"
    },
    released_at: "2014-07-14T05:29:50Z",
    repo_size: null,
    slug_size: null,
    stack: {
      id: "7e04461d-ec81-4bdd-8b37-b69b320a9f83",
      name: "cedar"
    },
    updated_at: "2014-07-14T05:29:50Z",
    web_url: "http://t-1000-cloud.herokuapp.com/"
  }
  ]
})
