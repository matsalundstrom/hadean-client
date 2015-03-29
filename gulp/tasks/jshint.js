var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config = require('../config.js')();

gulp.task('jshint', function() {
    'use strict';
    gulp.src(config.jsPath)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});