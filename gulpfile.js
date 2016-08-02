"use strict";

var gulp = require('gulp');
// var sass = require('gulp-sass');

gulp.task('hello', function() {
  console.log("Hello, Alex!");
});

// gulp.task('sass', function() {
//   return gulp.src('app/scss/style.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('app/css'));
// });

// 'app/scss/**/*.scss'

// gulp.watch('files-to-watch', ['tasks', 'to', 'run']);


// gulp.watch('app/scss/style.scss', ['sass']);
//
// gulp.task('watch', function() {
//   gulp.watch('app/scss/style.scss', ['sass']);
//   // other watchers
// });
