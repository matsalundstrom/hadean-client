var gulp = require('gulp');

var jshint = require('gulp-jshint');
var config = require('./gulp.config')();

gulp.task('jshint', function() {
    'use strict';
    gulp.src(config.jsPath)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', function() {

});