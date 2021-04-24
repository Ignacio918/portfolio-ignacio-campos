'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

gulp.task('sass', function () {
    gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'})) 
        .on('error', onError)
        .pipe(gulp.dest('css/main.css'))
});
gulp.task('default',function() {
    gulp.watch('scss/**/*.scss',['styles']);
});