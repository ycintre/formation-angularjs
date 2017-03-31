'use strict';

var gulp = require('gulp');
var gulpBowerFiles = require('gulp-bower-files');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

gulp.task('default', function () {
	runSequence('copy', 'build-scripts', 'build-vendors');
});

gulp.task('copy', function () {
	return gulp.src(['src/**/*', '!src/**/*.js'])
		.pipe(gulp.dest('dist'));
});

gulp.task('build-scripts', function () {
	return gulp.src('src/**/*.js')
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(rename({extname: '.min.js'}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build-vendors', function () {
	return gulpBowerFiles()
		.pipe(gulp.dest('dist/bower_components'))
});
