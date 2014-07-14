var gulp = require('gulp')
var stylus = require('gulp-stylus')
var nodemon = require('gulp-nodemon')

gulp.task('css', function () {
  return gulp.src('css/app.styl')
    .pipe(stylus())
    .pipe(gulp.dest('assets'))
})

gulp.task('watch:css', ['css'], function () {
  gulp.watch('css/**/*.styl', ['css'])
})

gulp.task('server', function () {
  nodemon('server.js')
})

gulp.task('default', ['css', 'watch:css', 'server'])
