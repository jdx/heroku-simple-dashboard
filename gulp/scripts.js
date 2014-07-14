var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('scripts', function () {
  return gulp.src(['frontend/**/module.js', 'frontend/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('assets'))
})

gulp.task('watch:scripts', ['scripts'], function () {
  gulp.watch('frontend/**/*.js', ['scripts'])
})
