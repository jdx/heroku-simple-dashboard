'use strict';
var gulp = require('gulp')
var fs = require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function (module) {
  require('./gulp/' + module)
})

gulp.task('default', ['watch:css', 'watch:scripts', 'server'])
gulp.task('build', ['css', 'scripts'])
