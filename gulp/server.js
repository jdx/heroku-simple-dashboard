var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

gulp.task('server', function () {
  nodemon('server.js')
})
