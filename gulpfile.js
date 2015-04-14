var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./gulp.config.js')();

gulp.task('jshint', function() {
    'use strict';
    gulp.src(config.jsPath)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter(plugins.stylish));
});

gulp.task('default', function() {

});